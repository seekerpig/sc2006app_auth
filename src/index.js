import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Boundary/UIComponents/Navbar';
import { globalTheme } from './globalTheme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "./Boundary/UIComponents/Footer";
import { AuthProvider } from "./Control/SessionController";

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  //<React.StrictMode>
  <React.Fragment>
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <AuthProvider>
      <Navbar/>
      <App />
      <Footer/>
      </AuthProvider>
    </ThemeProvider>
  </React.Fragment>
  //</React.StrictMode>
);


