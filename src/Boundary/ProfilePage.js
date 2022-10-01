import React from "react";
import Container from "@mui/material/Container";
import Card from "./UIComponents/Card";
import { Grid, Typography, Box, Paper } from "@mui/material";
// firebase connection
// import { db } from '../../src/firebaseconfig';
// import { collection, getDocs } from 'firebase/firestore'
// get entities
import User from "../Entity/User";
import Game from "../Entity/Game";

// manually hard code some objects
const user1 = new User(
  "abcd",
  "James Tan",
  "jamestan@gmail.com",
  "92749920",
  "I am a casual badminton player living in the northeast side of Singapore. Looking to play usually during friday nights!",
  "https://images.generated.photos/Ba_z-g_9fZ7h9GVAr0nSYFqfqLwwrj0RPlTlUi2I2Vs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQ4MzM4LmpwZw.jpg"
);
const game1 = new Game(
  "game1",
  "30 minute quick game",
  "Badminton",
  "Come join for a 30mins quick game at Queenstown. Need a partner to play with! Telegram: @james02",
  { seconds: 1663430400, nanoseconds: 839000000 },
  { seconds: 1663430400, nanoseconds: 839000000 },
  "Queenstown Sports Centre",
  4,
  1,
  user1.uniqueId
);
const game2 = new Game(
  "game2",
  "my second game!",
  "Badminton",
  "Come join for a 30mins quick game at Queenstown. Need a partner to play with! Telegram: @james02",
  { seconds: 1663430400, nanoseconds: 839000000 },
  { seconds: 1663430400, nanoseconds: 839000000 },
  "Queenstown Sports Centre",
  4,
  1,
  user1.uniqueId
);
//MISSING SOME LOGIC TO RETRIEVE USER FROM DATABASE INSTEAD OF HARDCODE LIKE THIS
//IMPORT AND USE FUNCTION FROM ProfileController instead of coding it here
//AFTER RETRIEVE USER FROM DATABASE, YOU NEED TO FIND THE GAMES OF THE USER and user1.addGameToUser()
//ALSO FOR EACH GAME, POPULATE A CARD FOR PROFILE.

const games = [game1, game2];

user1.addGameToUser(game1.gameId);
user1.addGameToUser(game2.gameId);

export default function ProfilePage() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#ffffff",
          padding: "3rem",
          paddingBottom: "5rem",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ mb: 2 }}>
            <Typography gutterBottom variant="overline" align="center" style={{fontSize:'14px'}}>
              <b>My Profile</b>
            </Typography>
          </Grid>
          <Grid item align="center">
            <img
              alt={user1.name}
              src={user1.profileImage}
              style={{
                borderRadius: "50%",
                marginBottom: "20px",
                maxWidth: "100%",
                minWidth: "60%",
              }}
            />
          </Grid>
          <Grid item>
            <Typography align="center" gutterBottom variant="overline">
              <b>Name:</b> {user1.name}{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" gutterBottom variant="overline">
              <b>Email Address:</b> {user1.email}{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" style={{ marginBottom: "30px" }} variant="overline">
              <b>Phone Number:</b> {user1.phoneNo}{" "}
            </Typography>
          </Grid>
          <Grid item align="center" mt={3}>
            <Paper
              style={{
                minWidth: "60%",
                minHeight: "50px",
                backgroundColor: "#3563e9",
                color: "#ffffff",
                padding: "1.5rem",
                borderRadius: "1rem",
              }}
            >
              <Typography
                gutterBottom
                
                style={{ fontSize: "16px", color: "#ffffff", width:"100%" }}
              >
                <b>Description:</b>
              </Typography>
              <Typography variant="subtitle1" style={{ fontSize: "14px" }} >
                {user1.description}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          //backgroundColor: '#ffffff',
          marginTop: "7rem",
          marginBottom:'10rem',
        }}
      >
        
        <div style={{textAlign:'center', marginBottom:'2rem'}}>
        <Typography gutterBottom variant="overline" align="center" style={{fontSize:'14px', marginBottom:'1rem'}}>
          <b>My Games</b>
        </Typography>
        </div>
       
        {games && <Card games={games} />}
      </Box>
    </Container>
  );
}
