import React from "react";
import Container from "@mui/material/Container";
import Card from "./Card";
import Filter from "./Filter";
// import Realtime Games Collection hooks
import { useGamesCollection } from "./hooks/GamesController";

export default function ExplorePage() {
  const { games: gameList } = useGamesCollection("Games");

  return (
    <Container>
      <Filter />
      {gameList && <Card games={gameList} />}
    </Container>
  );
}
