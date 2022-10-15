import { useState, useEffect } from "react";
import Game from "../Entity/Game";
import { getGames, getAGame } from "./DatabaseController";

/**
 * This method will call getGames() from DatabaseController
 * @returns the array of all games
 */
export const GetGames = async () => {
  return await getGames();
};

/**
 * This method will return the game information based on the gameId given
 * @param {string} gameId unique identifier for each game
 * @returns the game information of the gameId if it exist, else will show error or pending
 */
export const GameInfo = (gameId) => {
  const [game, setGame] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const doc = await getAGame(gameId);
        let results;
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
      } catch (err) {
        console.log("Error occured when fetching game");
      }
    })();
  }, []);

  return { error, isPending, game };
};
