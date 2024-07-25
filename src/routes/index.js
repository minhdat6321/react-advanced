import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";

import AuthRequire from "./AuthRequire";
import LoginPage from "../pages/LoginPage";
import BlankLayout from "../layouts/BlankLayout";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout />
        }
      >
        <Route index element={<HomePage />} />
        <Route path="job/:jobId" element={<AuthRequire> <DetailPage /> </AuthRequire>} />
      </Route>
      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

    </Routes>
  );
}

export default Router;