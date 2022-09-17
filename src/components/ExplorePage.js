import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Card from "./Card";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import { InfoRounded } from "@mui/icons-material";
import Filter from "./Filter";

export default function ExplorePage() {
  const { currentUser, logout } = useAuth();
  return (
    <Container>
      <Filter />
      <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
        {Array.from(Array(5)).map((_, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}