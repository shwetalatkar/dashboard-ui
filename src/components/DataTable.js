import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Typography,
} from "@mui/material";

const rows = [
  {
    customer: { name: "Wade Warren", avatar: "path/to/avatar1.jpg" },
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: { name: "Jane Cooper", avatar: "path/to/avatar2.jpg" },
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    customer: { name: "Guy Hawkins", avatar: "path/to/avatar3.jpg" },
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    customer: { name: "Kristin Watson", avatar: "path/to/avatar4.jpg" },
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    customer: { name: "Cody Fisher", avatar: "path/to/avatar5.jpg" },
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    customer: { name: "Savannah Nguyen", avatar: "path/to/avatar6.jpg" },
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const statusColors = {
  Delivered: "success",
  Cancelled: "error",
  Pending: "warning",
};

const DataTable = () => {
  return (
    <TableContainer>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        style={{ padding: 10, color: "#ffffff" }}
      >
        Recent Orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ color: "#ffffff" }}>
            <TableCell sx={{ color: "#ffffff" }}>Customer</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>Order No.</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>Amount</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderNo}>
              <TableCell>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ffffff",
                  }}
                >
                  <Avatar
                    src={row.customer.avatar}
                    alt={row.customer.name}
                    style={{ marginRight: 8 }}
                  />
                  {row.customer.name}
                </div>
              </TableCell>
              <TableCell style={{ color: "#ffffff" }}>{row.orderNo}</TableCell>
              <TableCell style={{ color: "#ffffff" }}>{row.amount}</TableCell>
              <TableCell>
                <Chip label={row.status} color={statusColors[row.status]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
