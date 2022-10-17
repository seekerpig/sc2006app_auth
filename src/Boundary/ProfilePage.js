import React from "react";
import Container from "@mui/material/Container";
import Card from "./UIComponents/Card";
import { Grid, Typography, Box, Button, Alert } from "@mui/material";
//import { useAuth } from "../Control/SessionController";
//import { isLoggedin } from "../Control/LoginValidator";
import User from "../Entity/User";
import {
  retrieveProfile,
  retrieveUserGames,
  isLoggedin
} from "../Control/ProfileController";
import { useNavigate } from "react-router-dom";
//import { WindowSharp } from "@mui/icons-material";

/**
 * This method is called when the user accessed the Profile Page
 * @returns HTML
 */
export default function ProfilePage() {
  const { currentUser,logout } =  isLoggedin();
  console.log("After is Loggedin")
  console.log(currentUser);
 // const { currentUser } = useAuth();
 const [logoutMsg, setLogOutMsg] = React.useState("");
 const signOut = () => {
  logout();
  alert("Successfully Logged Out. Redirecting...");
  setLogOutMsg("Successfully Logged Out. Redirecting..")
  setTimeout(function () {
    navigate("/");
    window.location.reload();
    
  }, 100);
};

  const navigate = useNavigate();
  if (currentUser === null) {
    setTimeout(function () {
      navigate("/login");
    }, 2000);
  } else {
    console.log("User is right below here");
    const {
      error,
      isPending,
      user = new User(),
    } = retrieveProfile(currentUser.uid);
    console.log(error);
    console.log(isPending);
    const { games } = retrieveUserGames(currentUser.uid);
    console.log(games);

    
    /**
     * This method will sign user out
     */
    /*const signOut = () => {
      logout();
      setLogOutMsg("Successfully Logged Out. Redirecting...");
      setTimeout(function () {
        navigate("/");
      }, 2000);
    };*/
    return (
      <Container>
        {user && (
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#ffffff",
              padding: 2,
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
                <Typography
                  gutterBottom
                  variant="overline"
                  align="center"
                  style={{ fontSize: "14px" }}
                >
                  <b>My Profile</b>
                </Typography>
              </Grid>
              <Grid item align="center">
                <img
                  alt={user.getName()}
                  src={user.getProfileUrl()}
                  style={{
                    borderRadius: "50%",
                    marginBottom: "20px",
                    maxWidth: "100%",
                    minWidth: "60%",
                    height: "200px",
                    width: "200px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography align="center" gutterBottom variant="overline">
                  <b>Name:</b> {user.getName()}{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" gutterBottom variant="overline">
                  <b>Email Address:</b> {user.getEmail()}{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  style={{ marginBottom: "30px" }}
                  variant="overline"
                >
                  <b>Phone Number:</b> {user.getPhoneNo()}{" "}
                </Typography>
              </Grid>
              <Grid
                item
                align="center"
                mt={3}
                sx={{
                  width: { md: "80%", xs: "90%" },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#3563e9",
                    color: "#ffffff",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    boxShadow: 1,
                  }}
                >
                  <Typography
                    gutterBottom
                    style={{
                      fontSize: "16px",
                      color: "#ffffff",
                      width: "100%",
                    }}
                  >
                    <b>Description:</b>
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontSize: "14px" }}>
                    {user.getDescription()}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        <Box
          sx={{
            //backgroundColor: '#ffffff',
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Typography
              gutterBottom
              variant="overline"
              align="center"
              style={{ fontSize: "14px", marginBottom: "1rem" }}
            >
              <b>My Games</b>
            </Typography>
          </div>

          {games && <Card games={games} />}
        </Box>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Button
            align="center"
            type="submit"
            variant="outlined"
            onClick={signOut}
            sx={{ mt: 3, mb: 2, width: "100px" }}
          >
            Logout
          </Button>
          {logoutMsg !== "" && <Alert severity="success">{logoutMsg}</Alert>}
        </div>
      </Container>
    );
  }
}
