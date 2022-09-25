import { useState, useEffect } from "react";
import { db } from "./DatabaseController";
// import firebase function
import { getDoc, doc, onSnapshot, collection } from "firebase/firestore";
// Game entity
import Game from "../Entity/Game";
import { getCollection } from "./DatabaseController";

// Function to get ALL games from databasecontroller
export const GamesInfo = () => {
  let games = [];
  let gamelist = getCollection();
  //console.log(gamelist.games);
  if(gamelist.games != null)
  {
    gamelist.games.map((game)=>{
      games.push(game);
    })
  }
  return games;
};

// Function to get ONE game
export const GameInfo = (gameId) => {

  const [game, setGame] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const ref = doc(db, "Games", gameId);
    setIsPending(true);

    getDoc(ref).then((doc) => {
      let results;
      //console.log(doc.data());
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

  return { error, isPending, game };
}
