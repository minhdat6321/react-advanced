import { Button } from "@mui/material"
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='book/:id' element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
