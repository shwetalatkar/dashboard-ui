// src/components/RecentOrders.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "customer", headerName: "Customer", width: 150 },
  { field: "orderNo", headerName: "Order No", width: 150 },
  { field: "amount", headerName: "Amount", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const rows = [
  {
    id: 1,
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 2,
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Guy Hawkins",
    orderNo: "78985215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    id: 6,
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const RecentOrders = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Recent Orders</Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </Paper>
  );
};

export default RecentOrders;
