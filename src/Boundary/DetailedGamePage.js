import React from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardActions,
  Alert,
  AlertTitle,
  CardMedia,
  Box,
  Grid,
  Button,
} from "@mui/material/";
import LinearProgress from "@mui/material/LinearProgress";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Control/SessionController";

import { GameInfo } from "../Control/GamesInfoController";
import { JoinGame } from "../Control/JoinGameController";

//UI Embeded Map
function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

export default function DetailedGamePage() {
  let title = "";
  let description = "";
  let maxPlayers = "";
  let currentPlayers = "";
  let sportType = "";
  let startTime = "";
  let endTime = "";
  let location = "";

  let iframe = '';

  const { gameId } = useParams();
  const { error, isPending, game } = GameInfo(gameId);
  const [success, setSuccess] = React.useState("");
  const [error1, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  if (game != null) {
    title = game.getTitle();
    description = game.getDescription();
    maxPlayers = game.getMaxPlayers();
    currentPlayers = game.getCurrentPlayers();
    sportType = game.getSportType();
    startTime = game.getStartTime();
    endTime = game.getEndTime();
    location = game.getLocation();
    iframe = '<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBnFSyIityc8Bzm3AqWO4YCDr9RxW4K6qY&q=' + game.getLocation()+'">  </iframe>';
  }

  const { currentUser } = useAuth();
  const navigate = useNavigate();
  if (error) {
    setTimeout(function() {
      navigate("/");
    }, 5000);
  }

  async function handleSubmitJoinGame(event) {
    setLoading(true);
    console.log(loading);
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    // If no user redirect to login page
    if (currentUser === null) {
      setError("User not found. Please login to create game.");
      setTimeout(function() {
        navigate("/login");
      }, 3000);
    } else {
      // If game is full show game is full and redirect to other pages
      if (currentPlayers >= maxPlayers) {
        setError("Game is full");
      } else {
        try {
          //Call for join game and catch any error
          console.log("Here Alrdy");
          await JoinGame(gameId, currentUser.uid);
          setSuccess(
            "Game is successfully joined. Redirecting to profile page..."
          );
          setTimeout(function() {
            navigate("/profile");
          }, 3000);
        } catch (e) {
          console.log("e");
          console.log(e);
          //fail safe if user still managed to call function
          if (e.type === 400) {
            setError("User not found. Please login to create game.");
            setTimeout(function() {
              navigate("/login");
            }, 3000);
          } else {
            // If user already in game redirect to profile
            if (e.type === 200) {
              console.log("Hello");
              setError("You are already joined");
            } else {
              //any other reason that led to failure
              setError("Failed to Create A Game");
            }
          }
        }

        setLoading(false);
      }
    }
  }

  return (
    <div>
      {error1 && (
        <Alert severity="error">
          {" "}
          <AlertTitle>Error</AlertTitle>
          {error1}
        </Alert>
      )}
      {isPending && <LinearProgress />}
      {game && (
        <Box
          component="form"
          onSubmit={handleSubmitJoinGame}
          sx={{ minHeight: 800 }}
        >
          <Box paddingBottom={2}>
            <Link to="../explore" style={{ textDecorationLine: "none" }}>
              <ArrowBackIosIcon
                sx={{ verticalAlign: "middle" }}
                size="small"
                fontSize="6px"
                color="primary"
              />
              <Typography inline variant="button" align="right" color="primary">
                Explore more games
              </Typography>
            </Link>
          </Box>

          <Card>
          <Iframe iframe={iframe} />,
            <Grid container>
              <Grid item xs={12} md={5}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", padding: 4 }}
                  image="https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg"
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box sx={{ paddingX: 4, marginBottom: 6 }}>
                  <Typography
                    component="div"
                    variant="h4"
                    marginY={1}
                    marginTop={4}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                    marginY={2}
                  >
                    {description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container sx={{ paddingX: 4 }}>
              <Grid item xs={12} md={6}>
                <Grid container>
                  {/* <Box sx={{ display: "flex" }}> */}
                  <Grid item xs={4} marginBottom={2}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component="div"
                    >
                      Game
                    </Typography>
                  </Grid>
                  <Grid item xs={8} marginBottom={2}>
                    <Typography variant="body1" component="div">
                      {sportType}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} marginBottom={2}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component="div"
                    >
                      Date
                    </Typography>
                  </Grid>
                  <Grid item xs={8} marginBottom={2}>
                    <Typography variant="body1" component="div">
                      {new Date(startTime.seconds * 1000)
                        .toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(/ /g, " ")}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} marginBottom={2}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component="div"
                    >
                      Maximum Players
                    </Typography>
                  </Grid>
                  <Grid item xs={8} marginBottom={2}>
                    <Typography variant="body1" component="div">
                      {maxPlayers}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} marginBottom={2}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component="div"
                    >
                      Slots Available
                    </Typography>
                  </Grid>
                  <Grid item xs={8} marginBottom={2}>
                    <Typography variant="body1" component="div">
                      {maxPlayers - currentPlayers}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} marginBottom={1}>
                <Grid container>
                  <Grid item xs={4} marginBottom={2}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component="div"
                    >
                      Start Time
                    </Typography>
                  </Grid>
                  <Grid item xs={8} marginBottom={2}>
                    <Typography variant="body1" component="div">
                      {new Date(startTime.seconds * 1000).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} marginBottom={2}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component="div"
                    >
                      End Time
                    </Typography>
                  </Grid>
                  <Grid item xs={8} marginBottom={2}>
                    <Typography variant="body1" component="div">
                      {new Date(endTime.seconds * 1000).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} marginBottom={2}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      component="div"
                    >
                      Location
                    </Typography>
                  </Grid>
                  <Grid item xs={8} marginBottom={2}>
                    <Typography variant="body1" component="div">
                      {location}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <CardActions
              sx={{ paddingTop: 1, paddingRight: 4, paddingBottom: 4 }}
            >
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box>
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  style={{ minWidth: "80px", minHeight: "30px" }}
                  endIcon={<SendIcon />}
                >
                  JOIN NOW
                </Button>
              </Box>
            </CardActions>

            {success && <Alert severity="success">{success}</Alert>}
          </Card>
        </Box>
      )}
    </div>
  );
}
