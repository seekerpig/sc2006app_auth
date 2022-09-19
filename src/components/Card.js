import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Grid version 1
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function GameList ({ games }) {
  console.log(games)
  return (
    <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} >
      {games.map(game => (
      <Grid item xs={6} sm={6} md={4} lg={3} key={game}>
        
          <Card width='100%' borderRadius = '3' >
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" style={{ fontSize: 15 }}>
                {game.title}
              </Typography>
              <Typography gutterBottom variant="overline" component="div" style={{ fontSize: 11 }}>
                {game.sportsType}
              </Typography>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                  <CalendarMonthIcon sx={{ verticalAlign: "middle" }} color="disabled" />
                  <Typography variant="body2" color="text.secondary" sx={{ verticalAlign: "middle", display: "inline-flex", ml: 1 }}>
                    {new Date(game.date.seconds * 1000).toLocaleDateString('en-GB', {day: 'numeric', month: 'short'}).replace(/ /g, ' ')}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <AccessTimeIcon sx={{ verticalAlign: "middle" }} color="disabled" />
                  <Typography variant="body2" color="text.secondary" sx={{ verticalAlign: "middle", display: "inline-flex", ml: 1 }}>
                  {new Date(game.startTime.seconds * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <LocationOnIcon sx={{ verticalAlign: "middle" }} color="disabled" />
                  <Typography variant="body2" color="text.secondary" sx={{ verticalAlign: "middle", display: "inline-flex", ml: 1 }}>
                  {game.location}
                  </Typography>
                </Grid>
              </Grid>

            </CardContent>
            <CardActions>
              <Box sx={{ flexGrow: 1 }}>
                <PeopleAltIcon sx={{ fontSize: 25, ml: 1, verticalAlign: "middle" }} />
                <Typography variant="h6" color="text.secondary" sx={{ verticalAlign: "middle", display: "inline-flex", ml: 1 }}>
                  {game.currentPlayers} / {game.maxPlayers}
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" style={{ minWidth: '80px', minHeight: '30px' }} >View</Button>
              </Box>
            </CardActions>
          </Card>

        

      </Grid>
      ))}
    </Grid>

  );
}
