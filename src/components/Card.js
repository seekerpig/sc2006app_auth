import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Grid version 1
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Box from '@mui/material/Box';
//import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ImgMediaCard() {
  return (
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{fontSize:15}}>
          Looking for casual game
        </Typography>
        <Typography gutterBottom variant="overline" component="div" style={{fontSize:11}}>
          Badminton
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <CalendarMonthIcon sx={{ verticalAlign:"middle"}}  color="disabled"/>
            <Typography variant="body2" color="text.secondary" sx={{verticalAlign:"middle", display:"inline-flex", ml:1}}>
              Date
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <AccessTimeIcon sx={{ verticalAlign:"middle"}}  color="disabled"/>
            <Typography variant="body2" color="text.secondary" sx={{verticalAlign:"middle", display:"inline-flex", ml:1}}>
              Date
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LocationOnIcon sx={{ verticalAlign:"middle"}} color="disabled" />
            <Typography variant="body2" color="text.secondary" sx={{verticalAlign:"middle", display:"inline-flex", ml:1}}>
              Location
            </Typography>
          </Grid>
        </Grid>

      </CardContent>
      <CardActions>
          <Box sx={{ flexGrow: 1 }}>
            <PeopleAltIcon  sx={{ fontSize: 25, ml:1, verticalAlign:"middle"}} />
            <Typography variant="h6" color="text.secondary" sx={{verticalAlign:"middle", display:"inline-flex", ml:1}}>1 / 6</Typography>
          </Box>
          <Box>
            <Button variant ="contained"  style={{minWidth: '80px', minHeight: '30px'}} >View</Button>
          </Box>
      </CardActions>
    </Card>
  );
}
