import { useState,useLayoutEffect } from "react";
import User from "../Entity/User";
import { useAuth } from "../Control/SessionController";
import { retrieveAUser, CreateMessage, RetrieveMessages } from "./DatabaseController";


/**
 * Checks sessioncontroller if there is someone logged in at the moment. Returns currentuser if true.
 * @returns currentUser
 */
export const isLoggedin = () => {
    const currentUser = useAuth();
    return currentUser;
}
/**
 * Retrieves profile of user by calling database controller after accepting userId as input
 * @param {string} userId 
 * @returns object of user
 */
export const retrieveProfile = (userId) => {

    const user1 = useAuth();
    console.log("User 1 is here");
    console.log(user1);
    const [user, setUser] = useState(null);

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    console.log(userId);
    useLayoutEffect(() => {
        (async () => {
            try {
                const doc = await retrieveAUser(userId);

                let results;
                if (doc.data() == null) {
                    setIsPending(false);
                    setError("Could not find that user");
                } else {
                    console.log("Data successfully retrieved");
                    console.log(doc.data());
                    results = new User(
                        userId,
                        doc.data().name,
                        doc.data().email,
                        doc.data().phoneNo,
                        doc.data().description,
                        doc.data().profileUrl,
                        doc.data().gameList
                    );

                    console.log(results);
                    setUser(results);
                }
            } catch (err) {
                console.log(err);
                console.log(userId);
                console.log("Error occured when fetching User");
            }
        })();
    }, []);

    console.log(user);

    return { error, isPending, user };
    //this function is not yet implemented in profile page, so need to import into profile page also, cause profile page is currently hardcoded.
};

/**
 * This function retrieves message from database controller by calling database controller.
 * 
 * @returns {object} messages retrieved from database.
 */
export const retrieveMessages = () => {
    // const messagesRef = collection(db, 'messages');
    // const q = query(messagesRef, orderBy("createdAt")); //orderBy("createdAt") where('gameID', '==', gameId),
    // //console.log(q);
    // const messages = useCollectionData(q, { idField: 'id' });
    // return messages;
    return RetrieveMessages();

}

/**
 * This function calls database controller to create a new message in database.
 * @param {String} text 
 * @param {Date} createdAt 
 * @param {String} uid 
 * @param {String} photoURL 
 * @param {String} gameId 
 */
export const createMessage = async (text, createdAt, uid, photoURL, gameId) => {
    await CreateMessage(text, createdAt, uid, photoURL, gameId);
}