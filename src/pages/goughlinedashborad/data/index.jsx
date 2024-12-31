// src/App.js
import React from "react";
import { Container, Typography } from "@mui/material";
import DataAnalytics from "@/components/datanalytics";
import DashboardLayout from "@/components/layout/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Data Table with PDF Download
      </Typography>
      <DataAnalytics />
    </Container>
    </DashboardLayout>
  );
}

export default App;
