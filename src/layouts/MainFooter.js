import { Box, Link, Typography } from "@mui/material";
import * as React from 'react';


function MainFooter() {
  return (

    <Box spacing={2}>
      <Typography variant="body2" color="text.secondary" align="center" p={1}>
        {"Copyright © "}
        <Link color="inherit" href="#">
          DiAyTiO6
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>


  );
}

export default MainFooter;