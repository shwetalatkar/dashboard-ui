// src/components/Sidebar.js
import React from "react";
import { Drawer, List, ListItem, ListItemIcon, Toolbar } from "@mui/material";
import {
  Home,
  BarChart,
  Note,
  FileCopy,
  ShoppingBag,
} from "@mui/icons-material";

const Sidebar = () => {
  const icons = [
    <Home />,
    <BarChart />,
    <Note />,
    <FileCopy />,
    <ShoppingBag />,
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 64,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 64,
          boxSizing: "border-box",
          bgcolor: "#1f2029",
        },
      }}
    >
      <Toolbar />
      <List>
        {icons.map((icon, index) => (
          <ListItem key={index}>
            <ListItemIcon
              sx={{
                color: "#ffffff",
                marginTop: "10px",
                "&:hover": {
                  color: "#7591ff",
                },
              }}
            >
              {icon}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
