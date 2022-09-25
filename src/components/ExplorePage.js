import React from "react";
import Container from "@mui/material/Container";
import Card from "./Card";
import Filter from "./Filter";
// import Realtime Games Collection hooks
import { GamesInfo } from "./hooks/GamesInfoController";

export default function ExplorePage() {
  const { games: gameList } = GamesInfo();

  return (
    <Container>
      <Filter />
      {gameList && <Card games={gameList} />}
    </Container>
  );
}
