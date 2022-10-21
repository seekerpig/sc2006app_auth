import { useState, useEffect } from "react";
import Game from "../Entity/Game";
import { getGames, getAGame, retrieveAUser } from "./DatabaseController";

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
  const [profilesData, setProfilesData] = useState(null);

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
        var tempUserList = [];
        let temp;
        for (let i = 0; i < doc.data().userList.length;i++)
        {
          temp = await retrieveAUser(doc.data().userList[i]);
          tempUserList.push({name:temp.data.name,profileUrl:temp.data().profileUrl,userId:doc.data().userList[i]});
        } 
        setProfilesData(tempUserList);
      } catch (err) {
        console.log("Error occured when fetching game");
      }
    })();
  }, []);

  return { error, isPending, game, profilesData };
};

// export const getUserListInfo = async (userList) => {
//   var tempUserList = [];
//   let temp;

//   for (let i = 0; i < userList.length;i++)
//   {
//     temp = await retrieveAUser(userList[i]);
//     tempUserList.push({name:temp.data.name,profileUrl:temp.data().profileUrl,userId:userList[i]});
//   }
//   return(tempUserList);
// }
