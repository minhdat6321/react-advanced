import React from "react";
import { Link, Typography } from "@mui/material";

function MainFooter() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" p={1}>
      {"Copyright © "}
      <Link color="inherit" href="https://www.facebook.com/profile.php?id=100014577917633">
        DiAyTiO6
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default MainFooter;