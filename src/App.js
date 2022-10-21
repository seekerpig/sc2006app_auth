import * as React from "react";
import SignupForm from "./Boundary/SignupForm";
import LoginForm from "./Boundary/LoginForm";
import HomePage from "./Boundary/HomePage";
import CreateGameForm from "./Boundary/CreateGameForm";
import { ProfilePage, ViewOtherProfile } from "./Boundary/ProfilePage";
//import ViewOtherProfile  from "./Boundary/ProfilePage";

import ExplorePage from "./Boundary/ExplorePage";
import DetailedGamePage from "./Boundary/DetailedGamePage";
import ChatRoomPage from "./Boundary/ChatRoomPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Navbar from './Navbar';
import Container from "@mui/material/Container";

function App() {
  return (
    <Container component="main" sx={{ mt: 12, minHeight: 880 }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/creategame" element={<CreateGameForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:userId" element={<ViewOtherProfile />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/chatroom/:gameId" element={<ChatRoomPage />} />
          <Route path="/games/:gameId" element={<DetailedGamePage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
