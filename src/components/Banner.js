import React from "react";
import { Typography, Grid, Button, Container, Paper } from "@mui/material/";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
import Image from './bluebg.jpg'; // Import using relative path




function Banner() {
    return (
        <div style={{ margin: '20px 0px' }}>
            <Paper classname="paperContainer" style={{ backgroundImage: `url(${Image})` }} sx={{
                minHeight: 300,
                borderRadius: '16px',

            }}>
                <Grid container sx={{minHeight: 200}}>
                    <Grid xs={12} display="flex" justifyContent="center" alignItems="center"  style={{marginTop:'50px', marginBottom:'20px'}}>
                        <Typography
                            variant="h5"
                            align="center"

                            style={{ color: 'white' }}
                        >Find Friends to <br /> Play Sports!
                        </Typography>
                    </Grid>
                    <Grid xs={12} display="flex" justifyContent="center" alignItems="center" style={{marginTop:'10px', marginBottom:'20px'}}>
                        <Typography
                            variant="h7"
                            align="center"

                            style={{ color: 'white' }}
                        >Make new friends and enjoy a sports activity together
                        </Typography>
                    </Grid>
                    <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Button variant="contained" href="/explore" style={{ backgroundColor: "#3563E9", }}>
                            View More Games
                        </Button>
                    </Grid>
                </Grid>



            </Paper>



        </div>
    );
}

export default Banner;
