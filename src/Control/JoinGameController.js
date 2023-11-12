/* eslint-disable react-hooks/rules-of-hooks */

import { joinAGame } from "./DatabaseController";
import { useAuth } from "./SessionController";

/**
 * This method will check if userId is logged in from SessionController
 * If user is logged in then will call joinAGame from DatabaseController to enroll user to the game
 * Else throw error
 * @param {string} gameId is the unique identifier for the game
 * @param {string} userId is the unique identifier for the user
 * 
 */
export const JoinGame = async (gameId, userId) => {
  console.log("In join game");

  if (userId === null) {
    console.log("something wong");
    const error = {
      type: 400,
    };
    throw error;
  }

  const result = await joinAGame(gameId, userId);
  console.log(result);
  if (result === 200) {
    console.log("triggered");
    const error = {
      type: 200,
    };
    throw error;
  }
};

export const checkLoggedin = () => {
  const currentUser = useAuth();
  return currentUser;
}


export const isLoggedin = () => {
  const currentUser = useAuth();
  return currentUser;
}
