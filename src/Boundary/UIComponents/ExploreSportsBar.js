import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import badminton from "./images/badminton.png";
import basketball from "./images/basketball.png";
import soccer from "./images/soccer.png";
import volleyball from "./images/volleyball.png";
import pingpong from "./images/ping-pong.png";
import { Link } from "react-router-dom";
import bike from "./images/bike.png";

export default function ExploreSportsBar() {
  return (
    <div>
      <Box
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          inline
          variant="overline"
          align="left"
          style={{ color: "#9e998b" }}
        >
          Explore Sports
        </Typography>

        <Link to="./explore" style={{ textDecorationLine: "none" }}>
          <Typography inline variant="overline" align="right" color="primary">
            View More Sports
          </Typography>
        </Link>
      </Box>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        style={{ marginBottom: "50px" }}
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid item xs align="center">
          <Link to="./explore?sports=Badminton">
            {" "}
            {/*currently only link to explore page but does not trigger filter*/}
            <Paper
              style={{ display: "flex", justifyContent: "center" }}
              sx={{
                minHeight: 150,
                minWidth: 150,

                borderRadius: "16px",
              }}
            >
              <Paper
                style={{
                  backgroundImage: `url(${badminton})`,
                  backgroundSize: "100px 100px",
                  backgroundRepeat: "no-repeat",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "20px",
                }}
                sx={{
                  minHeight: 100,
                  minWidth: 100,
                  boxShadow: 0,
                  borderRadius: "16px",
                }}
              ></Paper>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs align="center">
          <Link to="./explore?sports=Basketball">
            {" "}
            {/*currently only link to explore page but does not trigger filter*/}
            <Paper
              style={{ display: "flex", justifyContent: "center" }}
              sx={{
                minHeight: 150,
                minWidth: 150,

                borderRadius: "16px",
              }}
            >
              <Paper
                style={{
                  backgroundImage: `url(${basketball})`,
                  backgroundSize: "100px 100px",
                  backgroundRepeat: "no-repeat",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "20px",
                }}
                sx={{
                  minHeight: 100,
                  minWidth: 100,
                  boxShadow: 0,
                  borderRadius: "16px",
                }}
              ></Paper>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs align="center">
          <Link to="./explore?sports=Soccer">
            {" "}
            {/*currently only link to explore page but does not trigger filter*/}
            <Paper
              style={{ display: "flex", justifyContent: "center" }}
              sx={{
                minHeight: 150,
                minWidth: 150,

                borderRadius: "16px",
              }}
            >
              <Paper
                style={{
                  backgroundImage: `url(${soccer})`,
                  backgroundSize: "100px 100px",
                  backgroundRepeat: "no-repeat",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "20px",
                }}
                sx={{
                  minHeight: 100,
                  minWidth: 100,
                  boxShadow: 0,
                  borderRadius: "16px",
                }}
              ></Paper>
            </Paper>
          </Link>
        </Grid>

        <Grid item xs align="center">
          <Link to="./explore?sports=Pingpong">
            {" "}
            {/*currently only link to explore page but does not trigger filter*/}
            <Paper
              style={{ display: "flex", justifyContent: "center" }}
              sx={{
                minHeight: 150,
                minWidth: 150,

                borderRadius: "16px",
              }}
            >
              <Paper
                style={{
                  backgroundImage: `url(${pingpong})`,
                  backgroundSize: "100px 100px",
                  backgroundRepeat: "no-repeat",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "20px",
                }}
                sx={{
                  minHeight: 100,
                  minWidth: 100,
                  boxShadow: 0,
                  borderRadius: "16px",
                }}
              ></Paper>
            </Paper>
          </Link>
        </Grid>

        <Grid item xs align="center">
          <Link to="./explore?sports=Volleyball">
            {" "}
            {/*currently only link to explore page but does not trigger filter*/}
            <Paper
              style={{ display: "flex", justifyContent: "center" }}
              sx={{
                minHeight: 150,
                minWidth: 150,

                borderRadius: "16px",
              }}
            >
              <Paper
                style={{
                  backgroundImage: `url(${volleyball})`,
                  backgroundSize: "100px 100px",
                  backgroundRepeat: "no-repeat",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "20px",
                }}
                sx={{
                  minHeight: 100,
                  minWidth: 100,
                  boxShadow: 0,
                  borderRadius: "16px",
                }}
              ></Paper>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs align="center">
          <Link to="./explore?sports=Cycling">
            {" "}
            {/*currently only link to explore page but does not trigger filter*/}
            <Paper
              style={{ display: "flex", justifyContent: "center" }}
              sx={{
                minHeight: 150,
                minWidth: 150,
                borderRadius: "16px",
              }}
            >
              <Paper
                style={{
                  backgroundImage: `url(${bike})`,
                  backgroundSize: "100px 100px",
                  backgroundRepeat: "no-repeat",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "20px",
                }}
                sx={{
                  minHeight: 100,
                  minWidth: 100,
                  boxShadow: 0,
                  borderRadius: "16px",
                }}
              ></Paper>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
