import React from "react";
import Container from "@mui/material/Container";
import Card from "./UIComponents/Card";
import { Grid, Typography, Box, Paper, Button, Alert } from "@mui/material";
import { useAuth } from "../Control/SessionController";
// firebase connection
// import { db } from '../../src/firebaseconfig';
// import { collection, getDocs } from 'firebase/firestore'
// get entities
import User from "../Entity/User";
import { retrieveProfile,retrieveUserGame } from "../Control/ProfileController";
import {  useNavigate } from "react-router-dom";



export default function ProfilePage() {

  const {logout} = useAuth();
  const {currentUser} = useAuth();
  //console.log(currentUser);
  
  const navigate = useNavigate();
  if(currentUser === null){
    setTimeout(function() {
      navigate("/login");
    }, 100);}
  else{
  console.log("User is right below here")
  //console.log(activeUser);
  const { error, isPending, user2=new User()} = retrieveProfile(currentUser.uid);
  console.log(error);
  console.log(isPending);
  const {games2}=retrieveUserGame(currentUser.uid);
  console.log(games2);
  
  const [logoutMsg, setLogOutMsg] = React.useState("");
  const SignOut = () => {
      logout();
      setLogOutMsg("Successfully Logged Out. Redirecting...");
      setTimeout(function() {
        navigate("/");
      }, 2000);

    
  };
 // if (error) {
   // setTimeout(function() {
   //   navigate("/");
   // }, 5000);
  //}
  //
  //{isPending && <LinearProgress />}
  return (
    
    <Container>
      
      
      {user2 && (
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
            <Typography gutterBottom variant="overline" align="center" style={{ fontSize: '14px' }}>
              <b>My Profile</b>
            </Typography>
          </Grid>
          <Grid item align="center">
            <img
              alt={user2.getName()}
              src={user2.getProfileUrl()}
              style={{
                borderRadius: "50%",
                marginBottom: "20px",
                maxWidth: "100%",
                minWidth: "60%",
                height: "200px",
                width:"200px",
              }}
            />
          </Grid>
          <Grid item>
            <Typography align="center" gutterBottom variant="overline">
              <b>Name:</b> {user2.getName()}{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" gutterBottom variant="overline">
              <b>Email Address:</b> {user2.getEmail()}{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" style={{ marginBottom: "30px" }} variant="overline">
              <b>Phone Number:</b> {user2.getPhoneNo()}{" "}
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

                style={{ fontSize: "16px", color: "#ffffff", width: "100%" }}
              >
                <b>Description:</b>
              </Typography>
              <Typography variant="subtitle1" style={{ fontSize: "14px" }} >
                {user2.getDescription()}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box> )}
      <Box
        sx={{
          //backgroundColor: '#ffffff',
          marginTop: "5rem",
          marginBottom: '5rem',
        }}
      >

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography gutterBottom variant="overline" align="center" style={{ fontSize: '14px', marginBottom: '1rem' }}>
            <b>My Games</b>
          </Typography>
        </div>
        
        {games2 && <Card games={games2} />}
        
        
      </Box>
      <div style={{ textAlign: 'center' ,marginBottom: '1rem'}}>
        <Button
        align="center"
        type="submit"
        variant="outlined"
        onClick={SignOut}
        sx={{ mt: 3, mb: 2, width:'100px' }}
      >
        Logout
      </Button>
      {logoutMsg !== "" && <Alert severity="success">{logoutMsg}</Alert>}
        </div>
    </Container>
  );
}}
