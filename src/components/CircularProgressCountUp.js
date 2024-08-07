// src/components/CircularProgressCountUp.js
import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const CircularProgressCountUp = ({ value }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === value) {
          clearInterval(interval);
          return oldProgress;
        }
        return Math.min(oldProgress + 1, value);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <CircularProgress
        variant="determinate"
        value={progress}
        size={100}
        sx={{ position: "relative" }}
      >
        <Typography
          variant="h5"
          component="div"
          color="textSecondary"
          sx={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          {`${Math.round(progress)}%`}
        </Typography>
      </CircularProgress>
    </Stack>
  );
};

export default CircularProgressCountUp;
