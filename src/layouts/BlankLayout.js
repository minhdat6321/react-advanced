import { Outlet } from "react-router-dom";

import { Stack } from "@mui/material";



function BlankLayout() {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <h1>Blank Layout</h1>
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;