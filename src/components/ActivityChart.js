// src/components/ActivityChart.js
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FormControl } from "@mui/material";

const data = {
  daily: [
    { name: "5", value: 3000 },
    { name: "9", value: 10000 },
    { name: "11", value: 4000 },
    { name: "13", value: 5000 },
    { name: "15", value: 2000 },
    { name: "17", value: 7000 },
    { name: "19", value: 8000 },
    { name: "21", value: 15000 },
    { name: "23", value: 10000 },
    { name: "25", value: 8000 },
    { name: "27", value: 6000 },
  ],
  weekly: [
    { name: "Week 1", value: 20000 },
    { name: "Week 2", value: 15000 },
    { name: "Week 3", value: 18000 },
    { name: "Week 4", value: 12000 },
  ],
  monthly: [
    { name: "Jan", value: 30000 },
    { name: "Feb", value: 25000 },
    { name: "Mar", value: 27000 },
    { name: "Apr", value: 22000 },
  ],
};

const ActivityChart = () => {
  const [view, setView] = useState("daily");

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 185,
      }}
    >
      <FormControl
        variant="outlined"
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          width: "15%",
          zIndex: 1,
        }}
      ></FormControl>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data[view]}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
          <YAxis tick={{ fill: "#ffffff" }} />
          <Tooltip />
          <Bar dataKey="value" fill="#7591ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
