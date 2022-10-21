import React, { useRef, useState } from 'react';
import './ChatRoomPage.css';
//import { collection} from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { retrieveProfile, checkLoggedIn, retrieveMessages, createMessage } from "../Control/ChatRoomController";
import { useParams } from "react-router-dom";
import { Typography,  Box, Button } from "@mui/material/";
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";


/**
 * Create a Chat Room Page
 * 
 */
function ChatRoomPage() {

  //const [user] = useAuthState(auth);

  const { gameId } = useParams();
  console.log("game id is  " + gameId);
  const { currentUser } = checkLoggedIn();
  let currentUserWithProfile;
  console.log("After is Loggedin")
  console.log(currentUser);
  if (currentUser !== null) {
    const messageReturn = retrieveProfile(currentUser.uid);
    //console.log(messageReturn.user);
    currentUserWithProfile = messageReturn.user;
  }


  return (
    <Box className="ChatRoomPage" styles={{ marginTop: '50px' }}>
      <Box paddingBottom={2} sx={{textAlign: "left"}}>
        <Link to={`/games/${gameId}`} style={{ textDecorationLine: "none" }}>
          <ArrowBackIosIcon
            sx={{ verticalAlign: "middle" }}
            size="small"
            fontSize="6px"
            color="primary"
          />
          <Typography inline variant="button" align="right" color="primary">
            Back to Game information
          </Typography>
        </Link>
      </Box>
      <header>
        <Typography sx={{ align: 'center', flexGrow: 1 }}>Game Room : {gameId}</Typography>
      </header>

      <section>
        {currentUserWithProfile && gameId && currentUserWithProfile.gameList.includes(gameId) ? <ChatRoom user1={currentUserWithProfile} gameId={gameId} /> : <p>Please Sign In With The Correct Account</p>}
      </section>

    </Box>
  );
}





/**
 * Display a chatroom UI
 * @param {object} props 
 * 
 */
function ChatRoom(props) {
  const dummy = useRef();
  let [messages] = retrieveMessages();
  const [formValue, setFormValue] = useState('');
  


  /**
   * When user tries to send a message, this function is called.
   *
   */
  const sendMessage = async (e) => {
    e.preventDefault();
    
    //console.log(e);
    console.log(props.user1);
    const uid = props.user1.userID;
    const photoURL = props.user1.profileUrl;
    console.log("uid is " + uid);
    console.log("photoURL is " + photoURL);
    createMessage(formValue, serverTimestamp, uid, photoURL, props.gameId);
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
    
    
    //this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  return (<>
    <main className="chatMain">
      {messages && messages.map(function (msg, i) { if (msg.gameID === props.gameId) {return <ChatMessage key={i} message={msg} currentUser={props.user1} />}else{return ""} })}
      
      <div ref={dummy}/>

    </main >

    <form className="chatForm" onSubmit={sendMessage}>

      <input className="inputChat" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

        <Button
          variant="contained"
          type="submit"
          size="large"
          disabled={!formValue}
          sx={{ height: "100%", width: "100%", margin: 0,borderRadius: "0"}}
        >
          <SendIcon />
        </Button>

      {/* <button className="buttonChat" type="submit" disabled={!formValue}><span role="img" aria-label="send">🕊️</span></button> */}

    </form>
  </>)
}

/**
 * Function to generate ChatMessage and Display onto UI
 * @param {object} props 
 * 
 */
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === props.currentUser.userID ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img className="imgChat" alt="" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p className="chatPara">{text}</p>
    </div>
  </>)
}


export default ChatRoomPage;
