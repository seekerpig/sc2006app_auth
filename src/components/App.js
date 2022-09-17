import * as React from 'react';
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import CreateGameForm from "./CreateGameForm";
import ProfilePage from "./ProfilePage";
import ExplorePage from "./ExplorePage";
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
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignupForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/creategame" element={<CreateGameForm/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/explore" element={<ExplorePage/>}/>
          </Routes>
          
        </AuthProvider>
        

        
        </Router>
        </Container>

    
    
  );
}

export default App;
