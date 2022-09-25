import { useState, useEffect } from "react";
import { db } from "./DatabaseController";
// import firebase function
import { collection, onSnapshot } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";
// Game entity
import Game from "../Entity/Game";


// Function to get ALL games
export const GamesInfo = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    let ref = collection(db, "Games");

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push(
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
        );
      });
      setGames(results);
    });
    return () => unsub();
  }, ["Games"]);

  return { games };
};

// Function to get ONE game
export const GameInfo = (gameId) =>{

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

  return {error, isPending, game};
}
