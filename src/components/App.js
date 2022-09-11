import * as React from 'react';
import Button from '@mui/material/Button';
import Signup from "./Signup";
import LoginForm from "./Login";
import Homepage from "./Homepage";
import {AuthProvider} from "../contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
        
      </AuthProvider>
    </Router>
    
    
  );
}

export default App;
