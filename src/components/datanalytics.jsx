// src/components/DataTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://9i2im325lb.execute-api.us-east-1.amazonaws.com/waterplant"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Sort tanks by name
        const sortedData = data.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        setData(sortedData);
        console.log(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Shrasshine ", 20, 10);
    doc.autoTable({
      head: [
        [
          "ID",
          "Name",
          "Current Level",
          "Total Capacity",
          "Location",
          "Timestamp",
        ],
      ],
      body: data.map((item) => [
        item.id,
        item.name,
        item.currentLevel,
        item.totalCapacity,
        item.location,
        new Date(item.timestamp).toLocaleString(),
      ]),
    });
    doc.save("data-table.pdf");
  };

  return (
    <div>
      <div className="flex justify-end py-4">
        <Button variant="contained" color="primary" onClick={downloadPDF}>
          Download as PDF
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="bg-[#6FDCE3]">
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Current Level</TableCell>
              <TableCell>Total Capacity</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.currentLevel}</TableCell>
                <TableCell>{item.totalCapacity}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  {new Date(item.timestamp).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataAnalytics;
