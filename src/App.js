import React from "react";
import {
  Avatar,
  CssBaseline,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  AppBar,
  Grid,
  Paper,
} from "@mui/material";
import {
  Search,
  Notifications,
  AccountCircle,
  Dashboard,
  Settings,
  Mail,
} from "@mui/icons-material";
import Sidebar from "./components/SideBar";
import MetricCard from "./components/MetricCard";
import DataTable from "./components/DataTable";
import ActivityChart from "./components/ActivityChart";
import CardComponent from "./components/CardComponent";
import CircularProgressCountUp from "./components/CircularProgressCountUp";
import { Star, StarBorder } from "@mui/icons-material";

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 4,
    feedback: "The food was excellent and so was the service...",
    avatar: "path/to/image.jpg",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    avatar: "path/to/image.jpg",
  },
  {
    name: "Devon Lane",
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender...",
    avatar: "path/to/image.jpg",
  },
];

const App = () => (
  <Box sx={{ display: "flex", bgcolor: "#141316" }}>
    <CssBaseline />
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ bgcolor: "#1f2029" }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <Typography variant="h6">
              <Dashboard sx={{ "&:hover": { color: "#7591ff" } }} />
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#3b3c40",
                borderRadius: 1,
              }}
            >
              <IconButton aria-label="search">
                <Search sx={{ color: "#ffffff" }} />
              </IconButton>
              <InputBase
                sx={{
                  "& .MuiInputBase-input::placeholder": {
                    color: "#ffffff",
                    opacity: 1,
                  },
                }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <IconButton
              color="inherit"
              sx={{ "&:hover": { color: "#7591ff" } }}
            >
              <Notifications />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ "&:hover": { color: "#7591ff" } }}
            >
              <Mail />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ "&:hover": { color: "#7591ff" } }}
            >
              <Settings />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ "&:hover": { color: "#7591ff" } }}
            >
              <AccountCircle />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h6" color={"#ffffff"}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {[
              "Total Orders",
              "Total Delivered",
              "Total Cancelled",
              "Total Revenue",
            ].map((title, i) => (
              <Grid item xs={12} sm={6} md={3} key={title}>
                <MetricCard
                  title={title}
                  value={["75", "70", "5", "$12k"][i]}
                  percentage="3%"
                  increase={i % 2 === 0}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Paper sx={{ p: 0, bgcolor: "#1f2029" }}>
                <ActivityChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, bgcolor: "#1f2029" }}>
                <DataTable />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MetricCard
                title="Net Profit"
                value="$6759.25"
                percentage="3%"
                increase
              >
                <CircularProgressCountUp value={75} />
              </MetricCard>
            </Grid>
            <Grid item xs={12}>
              <CardComponent>
                {["Goals", "Popular Dishes", "Menus"].map((label, i) => (
                  <Box
                    key={label}
                    display="flex"
                    alignItems="center"
                    color="#ffffff"
                    sx={{ marginTop: i ? 2 : 0 }}
                  >
                    <Avatar src="path/to/avatar.jpg" sx={{ marginRight: 2 }} />
                    <Typography variant="body1">{label}</Typography>
                  </Box>
                ))}
              </CardComponent>
            </Grid>
            <Grid item xs={12}>
              <CardComponent title="Customer's Feedback">
                {feedbacks.map((feedback, index) => (
                  <Box
                    key={index}
                    display="flex"
                    flexDirection="column"
                    marginBottom={2}
                    color="#ffffff"
                  >
                    <Box display="flex" alignItems="center">
                      <Avatar src={feedback.avatar} sx={{ marginRight: 2 }} />
                      <Typography variant="body1">{feedback.name}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < feedback.rating ? (
                          <Star key={i} sx={{ color: "#FFD700" }} />
                        ) : (
                          <StarBorder key={i} sx={{ color: "#FFD700" }} />
                        )
                      )}
                    </Box>
                    <Typography variant="body2">{feedback.feedback}</Typography>
                  </Box>
                ))}
              </CardComponent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default App;
