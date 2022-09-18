import React from 'react'
import { useState, useEffect } from 'react';
//import { useAuth } from "../contexts/AuthContext";
// import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import ResponsiveAppBar from './Navbar';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from './Card'
import Banner from "./Banner";
import ExploreSportsBar from './ExploreSportsBar';
import { db } from '../../src/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore'

export default function HomePage() {
  const [games, setGames] = useState(null)

  useEffect(() => {
    const ref = collection(db, 'Games')
    
    getDocs(ref).then((snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()})
      })
      setGames(results)
      console.log(results)
      
    })
  }, [])

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
      <ExploreSportsBar/>
      <div style={{marginBottom: '10px', marginTop:'50px' }}>
      <Typography variant="overline" style={{ color: '#9e998b'}}>
                Find Games to Play
            </Typography>
      </div>
      {games && <Card games={games} />}

    </Container>

  )
}
