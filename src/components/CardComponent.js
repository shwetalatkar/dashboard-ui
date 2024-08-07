// src/components/CardComponent.js
import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const CardComponent = ({ children, title }) => {
  return (
    <Paper sx={{ p: 2, bgcolor: "#1f2029" }}>
      {title && (
        <Typography variant="h6" sx={{ color: "#ffffff", marginBottom: 2 }}>
          {title}
        </Typography>
      )}
      {children}
    </Paper>
  );
};

export default CardComponent;
