import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Game from "../Entity/Game";
import Container from "@mui/material/Container";
import DisplayGameList from "./UIComponents/Card";
import Banner from "./UIComponents/Banner";
import ExploreSportsBar from "./UIComponents/ExploreSportsBar";
import { GetGames } from "../Control/GamesInfoController";
import { fetchDataFromAPI } from "../Control/APIController";


let slicedGameList = [];

/**
 * This method is called when the user land on the website or accessed the Home Page
 * @returns HTML
 */
export default function HomePage() {
  const [gameList, setList] = React.useState([]);

  if (gameList != null) {
    slicedGameList = gameList.slice(0, 8);
    console.log(slicedGameList);
  }

  useEffect(() => {
    (async () => {
      try {
        const games = await GetGames();
        setList(
          games.docs.map(
            (doc) =>
              new Game(
                doc.id,
                doc.data().title,
                doc.data().sportType,
                doc.data().description,
                doc.data().startTime,
                doc.data().endTime,
                doc.data().location,
                doc.data().maxPlayers,
                doc.data().currentPlayers,
                doc.data().userList
              )
          )
        );
            fetchDataFromAPI();
           
            
        
      } catch (err) {
        console.log("Error occured when fetching games");
      }
    })();
  }, []);
  return (
    <Container>
      <Banner />
      <ExploreSportsBar />
      <div style={{ marginBottom: "10px", marginTop: "50px" }}>
        <Typography variant="overline" style={{ color: "#9e998b" }}>
          Find Games to Play
        </Typography>
      </div>
      {slicedGameList.length !== 0 && (
        <DisplayGameList games={slicedGameList} />
      )}

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
      >
        <Button
          component={Link}
          to={`./explore`}
          variant="contained"
          size="large"
          style={{ minWidth: "80px", minHeight: "30px" }}
          endIcon={<NavigateNextIcon />}
        >
          Explore More Games
        </Button>
      </Box>
    </Container>
  );
}
