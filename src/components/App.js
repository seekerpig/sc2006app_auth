import * as React from 'react';
import Signup from "./Signup";
import LoginForm from "./Login";
import Homepage from "./Homepage";
import Creategame from "./Creategame";
import Profile from "./Profile";
import {AuthProvider} from "../contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

function App() {
  return (
      <Container component="main" sx={{mt: 5}}>
      {/* <Route exact path="/" element={<Homepage/>}/> */}
      
        
        <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/creategame" element={<Creategame/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
          
        </AuthProvider>
        

        
        </Router>
        </Container>

    
    
  );
}

export default App;
