import React, { useEffect, useState } from "react"
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import jsPDF from "jspdf"
import "jspdf-autotable"

const DataAnalytics = () => {
  const [storeOperations, setStoreOperations] = useState([])
  const [storedData, setStoredData] = useState(null);

useEffect(() => {
    if (typeof window !== "undefined") {
      // Access localStorage here
      const activeCredential = localStorage.getItem('activeCredential')
      setStoredData(activeCredential);
    }
  }, []);

  const endpoint = "https://7vut6337yf.execute-api.us-east-1.amazonaws.com/militaryHsptl/logs"

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const logs = await response.json()

        const filteredLogs = logs.filter(
          (log) => log.operation === "STORE" && log.data && log.data.length > 0
        )

        const filteredByOrg = filteredLogs.map((log) => {
          return {
            ...log,
            data: log.data.filter((tank) => {
              if (storedData === "KVT") {
                return tank.name === "KVT Tank"
              } else if (storedData === "Military") {
                return tank.name === "MH Tank"
              } else if (storedData === "JCO MAP LINE") {
                return tank.name === "JCO MAP LINE "
              }
              return true
            }),
          }
        }).filter(log => log.data.length > 0)

        const sortedLogs = filteredByOrg.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        )

        const logsWithSerialNumbers = sortedLogs.flatMap((log, logIndex) =>
          log.data.map((tank, tankIndex) => ({
            serialNumber: logIndex + 1,
            ...tank,
            timestamp: log.timestamp,
          }))
        )

        setStoreOperations(logsWithSerialNumbers)
        console.log("Filtered Store operations:", logsWithSerialNumbers)
      } catch (error) {
        console.error("Error fetching logs:", error)
      }
    }

    fetchData()
  }, [storedData])

  const downloadPDF = () => {
    const doc = new jsPDF()
    doc.text("Tank Activity Logs", 20, 10)
    doc.autoTable({
      head: [
        ["S.No", "Tank Name", "Current Level", "Location", "Total Capacity", "Date And Time"]
      ],
      body: storeOperations.map((tank, index) => [
        index + 1,
        tank.name,
        tank.currentLevel,
        tank.location,
        tank.totalCapacity,
        new Date(tank.timestamp).toLocaleString(),
      ]),
    })
    doc.save("Tanks-Logs.pdf")
  }

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
            {storeOperations.length > 0 ? (
              storeOperations.map((tank, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{tank.name}</TableCell>
                  <TableCell>{tank.location}</TableCell>
                  <TableCell>{tank.totalCapacity} Gal </TableCell>
                  <TableCell>{tank.currentLevel} Gal </TableCell>
                  <TableCell>{new Date(tank.timestamp).toLocaleString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No logs available for the selected credential.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataAnalytics
