// src/components/MetricCard.js
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const MetricCard = ({ title, value, percentage, increase, children }) => {
  return (
    <Card
      sx={{
        bgcolor: "#1f2029",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {value}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: increase ? "#4caf50" : "#f44336" }}
        >
          {percentage}
        </Typography>
      </CardContent>
      <Box sx={{ paddingRight: 2 }}>{children}</Box>
    </Card>
  );
};
export default MetricCard;
