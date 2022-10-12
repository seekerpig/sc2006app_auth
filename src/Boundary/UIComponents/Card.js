import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import badminton from "./images/badminton.png";
import basketball from "./images/basketball.png";
import soccer from "./images/soccer.png";
import volleyball from "./images/volleyball.png";
import pingpong from "./images/ping-pong.png";
import bike from "./images/bike.png";

export default function DisplayGameList({games}) {
  console.log(games);
  
  return (
    <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} alignItems="stretch" justifyContent="flex-start">
      {games.map((game) => (
        
        <Grid item xs={12} sm={6} md={4} lg={3} key={game.getGameId()}>
          <Card sx={{':hover': {
                  boxShadow: 5, // theme.shadows[20]
                },}} width="100%" style={{height:'100%', borderRadius:'0.5rem', paddingLeft:'10px',paddingRight:'10px', paddingBottom:'10px'}}>
            <Box display="flex" flexDirection="column" height="100%">
              <Box>
              {game.getSportType() === "Badminton" && <CardMedia 
                  component="img"
                  height="170"
                  sx={{objectFit: "contain", p:4}}
                  image={badminton}
                />}
                {game.getSportType() === "Cycling" && <CardMedia 
                  component="img"
                  height="170"
                  sx={{objectFit: "contain", p:4}}
                  image={bike}
                />}
                {game.getSportType() === "VolleyBall" && <CardMedia 
                  component="img"
                  height="170"
                  sx={{objectFit: "contain", p:4}}
                  image={volleyball}
                />}
                {game.getSportType() === "Soccer" && <CardMedia 
                  component="img"
                  height="170"
                  sx={{objectFit: "contain", p:4}}
                  image={soccer}
                />}
                {game.getSportType() === "Pingpong" && <CardMedia 
                  component="img"
                  height="170"
                  sx={{objectFit: "contain", p:4}}
                  image={pingpong}
                />}
                {game.getSportType() === "Basketball" && <CardMedia 
                  component="img"
                  height="170"
                  sx={{objectFit: "contain", p:4}}
                  image={basketball}
                />}
              </Box>
              <Box>
                <CardContent style={{ paddingBottom: "8px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{ fontSize: 15 }}
                  >
                    {game.getTitle()}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="overline"
                    component="div"
                    style={{ fontSize: 11 }}
                  >
                    {game.getSportType()}
                  </Typography>

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} md={6}>
                      <CalendarMonthIcon
                        sx={{ verticalAlign: "middle" }}
                        color="disabled"
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          verticalAlign: "middle",
                          display: "inline-flex",
                          ml: 1,
                        }}
                      >
                        {new Date(game.getStartTime().seconds * 1000)
                          .toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                          })
                          .replace(/ /g, " ")}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <AccessTimeIcon
                        sx={{ verticalAlign: "middle" }}
                        color="disabled"
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          verticalAlign: "middle",
                          display: "inline-flex",
                          ml: 1,
                        }}
                      >
                        {new Date(
                          game.getStartTime().seconds * 1000
                        ).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} display="flex">
                      <LocationOnIcon color="disabled" />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          verticalAlign: "middle",
                          display: "inline-flex",
                          ml: 1,
                        }}
                      >
                        {game.getLocation()}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>

              <Box sx={{ flexGrow: 1 }}></Box>
              <Box>
                <CardActions>
                  <Box sx={{ flexGrow: 1 }}>
                    <PeopleAltIcon
                      sx={{ fontSize: 25, ml: 1, verticalAlign: "middle" }}
                    />
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{
                        verticalAlign: "middle",
                        display: "inline-flex",
                        ml: 1,
                      }}
                    >
                      {game.getCurrentPlayers()} / {game.getMaxPlayers()}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      component={Link}
                      to={`/games/${game.getGameId()}`}
                      variant="contained"
                      style={{ minWidth: "80px", minHeight: "30px" }}
                    >
                      View
                    </Button>
                  </Box>
                </CardActions>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
