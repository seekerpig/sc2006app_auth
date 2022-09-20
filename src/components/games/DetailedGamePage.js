import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import SendIcon from "@mui/icons-material/Send";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import firebase connection
import { db } from "../../firebaseconfig";
import { getDoc, doc } from "firebase/firestore";
// import Game entity
import Game from "../entities/Game";

export default function DetailedGamePage() {
  const { gameId } = useParams();

  const [game, setGame] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const ref = doc(db, "Games", gameId);
    setIsPending(true);

    getDoc(ref).then((doc) => {
      let results;
      console.log(doc.data());
      if (doc.data() == null) {
        setIsPending(false);
        setError("Could not find that game.");
      } else {
        setIsPending(false);
        results = new Game(
          doc.id,
          doc.data().title,
          doc.data().sportType,
          doc.data().description,
          doc.data().date,
          doc.data().startTime,
          doc.data().endTime,
          doc.data().location,
          doc.data().maxPlayers,
          doc.data().currentPlayers,
          doc.data().userList
        );
      }
      setGame(results);
    });
  }, [gameId]);

  return (
    <div>
      {error && <Typography>{error}</Typography>}
      {isPending && <Typography>Loading...</Typography>}
      {game && (
        <Card>
          <Box sx={{ display: "flex" }}>
            <Box>
              <CardMedia
                component="img"
                sx={{ width: 400, margin: 3 }}
                image="https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg"
                alt="Live from space album cover"
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <CardContent>
                <Typography
                  component="div"
                  variant="h4"
                  marginY={1}
                  marginTop={4}
                >
                  {game.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                  marginY={2}
                >
                  {game.description}
                </Typography>
              </CardContent>
            </Box>
          </Box>

          <Box sx={{ display: "flex", margin: 3 }}>
            <Box sx={{ width: "50%", flexGrow: 1, display: "flex" }}>
              <Box sx={{ width: "30%" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                >
                  Game
                </Typography>
              </Box>
              <Box sx={{ width: "70%" }}>
                <Typography variant="body1" component="div">
                  {game.sportType}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "50%", flexGrow: 1, display: "flex" }}>
              <Box sx={{ width: "30%" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                >
                  Start Time
                </Typography>
              </Box>
              <Box sx={{ width: "70%" }}>
                <Typography variant="body1" component="div">
                  {new Date(game.startTime.seconds * 1000).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", margin: 3 }}>
            <Box sx={{ width: "50%", flexGrow: 1, display: "flex" }}>
              <Box sx={{ width: "30%" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                >
                  Date
                </Typography>
              </Box>
              <Box sx={{ width: "70%" }}>
                <Typography variant="body1" component="div">
                  {new Date(game.date.seconds * 1000)
                    .toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(/ /g, " ")}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "50%", flexGrow: 1, display: "flex" }}>
              <Box sx={{ width: "30%" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                >
                  End Time
                </Typography>
              </Box>
              <Box sx={{ width: "70%" }}>
                <Typography variant="body1" component="div">
                  {new Date(game.endTime.seconds * 1000).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", margin: 3 }}>
            <Box sx={{ width: "15%" }}>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                Location
              </Typography>
            </Box>
            <Box sx={{ width: "85%" }}>
              <Typography variant="body1" component="div">
                {game.location}
              </Typography>
            </Box>
          </Box>

          <CardActions sx={{ margin: 3 }}>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <Button
                variant="contained"
                size="large"
                style={{ minWidth: "80px", minHeight: "30px" }}
                endIcon={<SendIcon />}
              >
                JOIN NOW
              </Button>
            </Box>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
