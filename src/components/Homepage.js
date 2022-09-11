import React from 'react'
import {useAuth} from "../contexts/AuthContext";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Homepage() {

    const {currentUser,logout} = useAuth();
  return (
    <div>
    <div>Homepage</div>
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {currentUser && currentUser.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            my password is {currentUser && currentUser.password}
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={() => {logout();}}>Logout</Button>
      </CardActions>
    </Card>
    
    </div>
  )
}
