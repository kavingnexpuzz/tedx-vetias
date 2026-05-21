import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';

// Layouts
import MainLayout from './layouts/MainLayout';


// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Team from './pages/Team';

import FAQ from './pages/FAQ';
import Sponsors from './pages/Sponsors';
import SplashCursor from './components/SplashCursor';



const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#E50914' },
    secondary: { main: '#ffffff' },
    background: { default: '#0a0a0a', paper: '#111111' },
    text: { primary: '#f0f0f0', secondary: '#999999' },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' },
    h2: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' },
    h3: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.03em' },
    h4: { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '0.1em',
          fontFamily: "'DM Sans', sans-serif",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 0, background: '#111111' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SplashCursor COLOR="#E50914" />
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/team" element={<Team />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/sponsors" element={<Sponsors />} />
              </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
