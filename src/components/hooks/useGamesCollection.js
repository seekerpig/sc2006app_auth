import { useState, useEffect } from "react";
import { db } from "../../firebaseconfig";
// firebase imports
import { collection, onSnapshot } from "firebase/firestore";
// Game entity
import Game from "../entities/Game";

export const useGamesCollection = (c) => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push(
          new Game(
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
          )
        );
      });
      setGames(results);
    });
    return () => unsub();
  }, [c]);

  return { games };
};
