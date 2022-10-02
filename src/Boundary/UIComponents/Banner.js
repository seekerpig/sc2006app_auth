import React from "react";
import { Typography, Grid, Button, Paper } from "@mui/material/";
//import ArrowRightIcon from "@mui/icons-material/ArrowRight";
//import { Link } from "react-router-dom";
import Image from './images/bluebg3.jpg'; // Import using relative path




function Banner() {
    return (
        <div style={{ margin: '20px 0px' }}>
            <Paper className="paperContainer" style={{ backgroundImage: `url(${Image}`, backgroundPosition: "center center",backgroundSize:"cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",}} sx={{
                minHeight: 300,
                borderRadius: '16px',
                padding: '4rem',

            }}>
                <Grid container sx={{ minHeight: 200 }}>
                    <Grid xs={12} display="flex" justifyContent="center" alignItems="center" style={{ marginBottom: '20px' }}>
                        <Typography
                            variant="h5"
                            align="center"

                            style={{ color: 'white', fontSize: '35px' }}
                        >New Friends.<br /> New Sports.
                        </Typography>
                    </Grid>
                    <Grid xs={12} display="flex" justifyContent="center" alignItems="center" style={{ marginTop: '10px', marginBottom: '20px' }}>
                        <Typography
                            variant="h3"
                            align="center"
                            sx={{
                                width:
                                {
                                    lg:'50%',
                                    md:'70%',
                                    xs:'100%',
                                    
                                }
                            }}
                            style={{ color: 'white', fontSize: '16px' }}
                        >Have you ever wanted to play a new sports but don't have friends to play with? Versa helps you make new friends and enjoy a new sports activity together!
                        </Typography>
                    </Grid>
                    <Grid xs={12} display="flex" justifyContent="center" alignItems="center" style={{ marginTop: '10px' }}>
                        <Button variant="contained" href="/explore" style={{ backgroundColor: "#3563E9", }}>
                            Find Games Now
                        </Button>
                    </Grid>
                </Grid>



            </Paper>



        </div>
    );
}

export default Banner;
