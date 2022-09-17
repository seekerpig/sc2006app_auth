import React from 'react'
import { useAuth } from "../contexts/AuthContext";
// import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Grid version 1
import Card from './Card'
import Banner from "./Banner";


export default function Homepage() {
  const { currentUser, logout } = useAuth();

  return (
    // <ThemeProvider theme={theme}>
    //   <ResponsiveAppBar/>  
    //   <Container component="main">
    //     <Card sx={{ maxWidth: 345 }}>
    //       <CardContent>
    //           <Typography gutterBottom variant="h5" component="div">
    //               {currentUser && currentUser.email}
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //           my password is {currentUser && currentUser.password}
    //           </Typography>
    //       </CardContent>
    //       <CardActions>
    //       <Button size="small" onClick={() => {logout();}}>Logout</Button>
    //     </CardActions>
    //   </Card>


    //   </Container>
    // </ThemeProvider>
    <Container>
      <Banner />
      <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} >
        {Array.from(Array(5)).map((_, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </Container>

  )
}
