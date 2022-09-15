import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Navbar from './components/Navbar';
import { globalTheme } from './globalTheme';
import { ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <ThemeProvider theme={globalTheme}>
    <Navbar/>
    <App/>
  </ThemeProvider>
  //</React.StrictMode>
);


