import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import ThemeProvider from "./contexts/ThemeProvider";
import { AddFavoriteProvider } from "./contexts/AddFavoriteContext";
import { Container } from "@mui/material";

function App() {
  return (
    <AuthProvider>
      <AddFavoriteProvider>
        <Container>
          <BrowserRouter>
            <ThemeProvider>
              <Router />
            </ThemeProvider>
          </BrowserRouter>
        </Container>
      </AddFavoriteProvider>
    </AuthProvider>
  );
} export default App;
