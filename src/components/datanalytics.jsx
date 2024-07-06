import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DataAnalytics = () => {
  const [storeOperations, setStoreOperations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://9i2im325lb.execute-api.us-east-1.amazonaws.com/waterplant/logs"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const logs = await response.json();

        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

        const filteredLogs = logs.filter(
          (log) =>
            log.operation === "STORE" &&
            log.data &&
            log.data.length > 0 &&
            new Date(log.timestamp) >= threeDaysAgo
        );
        const sortedLogs = filteredLogs.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );

        setStoreOperations(sortedLogs);
        console.log("Store operations:", sortedLogs);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchData();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Tank Activity Logs", 20, 10);
    doc.autoTable({
      head: [
        [
          "Log ID",
          "Tank Name",
          "Current Level",
          "Location",
          "Total Capacity",
          "Date And Time",
        ],
      ],
      body: storeOperations.flatMap((log) =>
        log.data.map((tank) => [
          log.logId,
          tank.name,
          tank.currentLevel,
          tank.location,
          tank.totalCapacity,
          new Date(log.timestamp).toLocaleString(),
        ])
      ),
    });
    doc.save("store-operations-report.pdf");
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end py-4 px-2 sm:px-0 ">
        <Button variant="contained" color="primary" onClick={downloadPDF}>
          Download PDF
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Log ID</TableCell>
              <TableCell>Tank Name</TableCell>
              <TableCell>Current Level</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Total Capacity</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {storeOperations.flatMap((log) =>
              log.data.map((tank, index) => (
                <TableRow key={`${log.logId}-${tank.id}`}>
                  <TableCell>{log.logId}</TableCell>
                  <TableCell>{tank.name}</TableCell>
                  <TableCell>{tank.currentLevel}</TableCell>
                  <TableCell>{tank.location}</TableCell>
                  <TableCell>{tank.totalCapacity}</TableCell>
                  <TableCell>
                    {new Date(log.timestamp).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataAnalytics;
