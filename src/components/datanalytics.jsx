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
import { useRouter } from "next/router";

const DataAnalytics = () => {
  const router = useRouter();
  const { pathname } = router;
  const [storeOperations, setStoreOperations] = useState([]);
  const shrasshineendpoint = "https://9i2im325lb.execute-api.us-east-1.amazonaws.com/waterplant/logs";
  const Militaryendpoint = "https://7vut6337yf.execute-api.us-east-1.amazonaws.com/militaryHsptl/Logs";

  useEffect(() => {
    const endpoint = pathname.includes("militarydashborad") ? Militaryendpoint : shrasshineendpoint;

    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
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

        // Add serial number to each log's tank data
        const logsWithSerialNumbers = sortedLogs.flatMap((log, logIndex) =>
          log.data.map((tank, tankIndex) => ({
            serialNumber: logIndex + 1,
            ...tank,
            timestamp: log.timestamp,
          }))
        );

        setStoreOperations(logsWithSerialNumbers);
        console.log("Store operations:", logsWithSerialNumbers);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchData();
  }, [pathname]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Tank Activity Logs", 20, 10);
    doc.autoTable({
      head: [
        [
          "S.No",
          "Tank Name",
          "Current Level",
          "Location",
          "Total Capacity",
          "Date And Time",
        ],
      ],
      body: storeOperations.map((tank, index) => [
        index + 1,
        tank.name,
        tank.currentLevel,
        tank.location,
        tank.totalCapacity,
        new Date(tank.timestamp).toLocaleString(),
      ]),
    });
    doc.save("Tanks-Logs.pdf");
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
              <TableCell>S.No</TableCell>
              <TableCell>Tank Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Total Capacity</TableCell>
              <TableCell>Current Level</TableCell>
              <TableCell>Date And Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {storeOperations.map((tank, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{tank.name}</TableCell>
                <TableCell>{tank.location}</TableCell>
                <TableCell>{tank.totalCapacity} Gal </TableCell>
                <TableCell>{tank.currentLevel} Gal </TableCell>
                <TableCell>{new Date(tank.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataAnalytics;
