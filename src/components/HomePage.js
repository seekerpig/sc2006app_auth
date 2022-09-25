import React from "react";
//import { useAuth } from "../contexts/AuthContext";
// import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
// import ResponsiveAppBar from './Navbar';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from "@mui/material/Container";
import Card from "./Card";
import Banner from "./Banner";
import ExploreSportsBar from "./ExploreSportsBar";
// import Realtime Games Collection hooks
import { GamesInfo } from "./hooks/GamesInfoController";

export default function HomePage() {
  const { games: gameList } = GamesInfo();

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
      <ExploreSportsBar />
      <div style={{ marginBottom: "10px", marginTop: "50px" }}>
        <Typography variant="overline" style={{ color: "#9e998b" }}>
          Find Games to Play
        </Typography>
      </div>
      {gameList && <Card games={gameList} />}

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
      >
        <Button
          component={Link}
          to={`./explore`}
          variant="contained"
          size="large"
          style={{ minWidth: "80px", minHeight: "30px" }}
          endIcon={<NavigateNextIcon />}
        >
          Explore More Games
        </Button>
      </Box>
    </Container>
  );
}
