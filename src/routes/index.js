import * as React from "react";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRequire from "./AuthRequire";
import DiscoveryPage from "../pages/DiscoveryPage";
import FavoritePage from "../pages/FavoritePage";
import SearchPage from "../pages/SearchPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout />
      }
      >
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="movie/:movieId" element={<AuthRequire><DetailPage /> </AuthRequire>} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/discovery/:pageId" element={<DiscoveryPage withGenreId={""} />} />
        <Route path="/login" element={<LoginPage />} />

      </Route>
      <Route element={<BlankLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;