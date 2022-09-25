import React from "react";
import Container from "@mui/material/Container";
import Card from "./UIComponents/Card";
import Filter from "./UIComponents/FilterUI";
// import Realtime Games Collection hooks
import { GamesInfo } from "../Control/GamesInfoController";

export default function ExplorePage() {
  const gameList = GamesInfo();

  return (
    <Container>
      <Filter />
      {gameList.length !== 0 && <Card games={gameList} />}
    </Container>
  );
}
