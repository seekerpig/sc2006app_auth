import React from 'react'
import Container from '@mui/material/Container';
import Card from './Card'
import { Grid, Typography, Box, Paper } from '@mui/material';
// firebase connection
// import { db } from '../../src/firebaseconfig';
// import { collection, getDocs } from 'firebase/firestore'
// get entities
import User from './entities/User';
import Game from './entities/Game';



const user1 = new User("abcd", "James Tan", "jamestan@gmail.com", "92749920", "I am a casual badminton player living in the northeast side of Singapore. Looking to play usually during friday nights!", "https://images.generated.photos/Ba_z-g_9fZ7h9GVAr0nSYFqfqLwwrj0RPlTlUi2I2Vs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQ4MzM4LmpwZw.jpg");
const game1 = new Game("game1", "30 minute quick game", "Badminton", "Come join for a 30mins quick game at Queenstown. Need a partner to play with! Telegram: @james02", {seconds: 1663430400, nanoseconds: 839000000}, {seconds: 1663430400, nanoseconds: 839000000}, "5.30PM", "Queenstown Sports Centre", 4, 1, user1.uniqueId)
const game2 = new Game("game2", "my second game!", "Badminton", "Come join for a 30mins quick game at Queenstown. Need a partner to play with! Telegram: @james02", {seconds: 1663430400, nanoseconds: 839000000}, {seconds: 1663430400, nanoseconds: 839000000}, "5.30PM", "Queenstown Sports Centre", 4, 1, user1.uniqueId)

const games = [game1,game2];

user1.addGameToUser(game1.gameId);
user1.addGameToUser(game2.gameId);

export default function ProfilePage() {

  return (
    <Container>
      <Box sx={{
        display: "flex",
        backgroundColor: '#ffffff',
        padding: '50px',
      }}>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="h6" align="center">
              Profile Page
            </Typography>
          </Grid>
          <Grid item>
            <img alt={user1.name} src={user1.profileImage} style={{ borderRadius: '50px', margin:'20px'}} />
          </Grid>
          <Grid item>
            <Typography gutterBottom><b>Name:</b> {user1.name} </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom><b>Email address:</b> {user1.email} </Typography>
          </Grid>
          <Grid item>
            <Typography style={{marginBottom:'30px'}}><b>Phone Number:</b> {user1.phoneNo} </Typography>
          </Grid>
          <Grid item align="center" >
            <Paper style={{ width: '80%', minHeight: '50px', backgroundColor: '#3563e9', color: '#ffffff',padding:'30px', borderRadius:'20px'}}>
              <Typography gutterBottom variant="h6" style={{fontSize:'16px'}}>About Me / Description</Typography>
              <Typography>{user1.description}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        display: "flex",
        backgroundColor: '#ffffff',
        padding: '10px',
        pt: 5,
        marginTop: '50px',
        align:"center",
        flexDirection:"column",
      }}>
        <Typography gutterBottom variant="h6" align="center" style={{marginBottom:'20px'}} >
          My Games
        </Typography>
        {games && <Card games={games} />}
        {/* <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{width:"100%"}}>
          {user1.gameList.map((game, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index} align="center" >
              <Card style={{}} elevation={2} title={game.title} sportType={game.sportType} date={game.date} startTime={game.startTime} location={game.location} currentPlayers={game.currentPlayers} maxPlayers={game.maxPlayers} border="true"/>
            </Grid>
          ))}
        </Grid> */}


      </Box >
    </Container>
  )
}