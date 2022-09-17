import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Card from "./Card";
import Filter from "./Filter";

export default function ExplorePage() {
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