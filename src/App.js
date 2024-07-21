import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import SearchBar from './components/SearchBar';
import PaginationButton from './components/PaginationButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SearchBar />
        <Routes>
          <Route path='/' element={<HomePage />} />

        </Routes>
        <PaginationButton sx={{ p: 2 }} />
      </ThemeProvider>
    </div>
  );
}

export default App;
