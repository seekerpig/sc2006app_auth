import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Navbar from './components/Navbar';
import { globalTheme } from './globalTheme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  //<React.StrictMode>
  <React.Fragment>
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <Navbar />
      <App />
      <Footer/>
    </ThemeProvider>
  </React.Fragment>
  //</React.StrictMode>
);


