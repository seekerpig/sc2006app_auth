import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Grid version 1
import Button from "@mui/material/Button";
// import GameInfo function from GamesInfoController
import { GameInfo } from "../Control/GamesInfoController";

export default function DetailedGamePage() {
  const { gameId } = useParams();
  const { error,isPending,game } = GameInfo(gameId);

  return (
    <div>
      {error && <Typography>{error}</Typography>}
      {isPending && <Typography>Loading...</Typography>}
      {game && (
        <Box>
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
                    {game.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                    marginY={2}
                  >
                    {game.description}
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
                      {game.sportType}
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
                      {new Date(game.startTime.seconds * 1000)
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
                      {game.maxPlayers}
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
                      {game.maxPlayers - game.currentPlayers}
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
                      {new Date(
                        game.startTime.seconds * 1000
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
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
                      {new Date(game.endTime.seconds * 1000).toLocaleTimeString(
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
                      {game.location}
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
                  size="large"
                  style={{ minWidth: "80px", minHeight: "30px" }}
                  endIcon={<SendIcon />}
                >
                  JOIN NOW
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Box>
      )}
    </div>
  );
}