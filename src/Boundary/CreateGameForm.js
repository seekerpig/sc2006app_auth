import React,{useEffect}  from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Slider,
  Stack,
} from "@mui/material/";

import { styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GroupIcon from "@mui/icons-material/Group";
//import { useAuth } from "../Control/SessionController";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import MuiInput from "@mui/material/Input";
import {CreateNewGame,getAllFacilities } from "../Control/CreateGameController"
import { isLoggedin } from "../Control/LoginValidator";
//import { getFacilities } from "../Control/DatabaseController";


const Input = styled(MuiInput)`
  width: 42px;
`;



const sportTypes = [
  "Badminton",
  "Basketball",
  "Pingpong",
  "Soccer",
  "Cycling",
  "VolleyBall",
];
/**
 * This function is called when the create game form is accessed by the user.
 * @returns {html} 
 */
export default function Creategame() {
  const { currentUser } = isLoggedin();
  const today = new Date();

  //attributes from location to maxPlayers
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setDate] = React.useState(dayjs(today));
  const [endDate, setEndDate] = React.useState(dayjs(today).add(60, "minutes"));
  const [location, setLocation] = React.useState("");
  const [sportType, setSport] = React.useState("");
  const [maxPlayers, setPlayers] = React.useState(2);
  
  const [locations, setList] = React.useState([]);

  useEffect(() => {
    (async () => {
      try { 
        setList(await getAllFacilities());
        
        //console.log(something);
       /* const facilities = await getFacilities();
        setList(facilities.docs.map((doc) => (
          {
            placemarkid:doc.data().placemarkid,
            name:doc.data().name
          }
        )));*/
           // printSomething();
        
      } catch (err) {
        console.log('Error occured when fetching games');
      }
    })();
  }, []);
  console.log(locations);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeSport = (event) => {
    setSport(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setDate(newValue);
  };

  const handleChangeEndDate = (newValue) => {
    if (newValue >= startDate) {
      setEndDate(newValue);
    } else {
      alert("End Date & Time cannot be earlier than Starting Date & Time");
    }
  };

  const handleSliderChange = (event, newValue) => {
    setPlayers(newValue);
  };
  const handleSliderInputChange = (event) => {
    setPlayers(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (maxPlayers < 0) {
      setPlayers(0);
    } else if (maxPlayers > 100) {
      setPlayers(100);
    }
  };

  //console.log(currentUser);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  if(currentUser === null){
  setTimeout(function() {
    navigate("/login");
  }, 3000);}
     
  
  /**
   * This function is called when the user clicks on the create game button.
   * @param {object} event 
   */
  async function handleSubmitCreateGame(event) {
    setLoading(true);
    event.preventDefault();

    try {
      setError("")
      setSuccess("")
      console.log({
        titleA: title,
        locationA: location,
        sportTypeA: sportType,
        startDateA: startDate,
        endDateA: endDate,
        descriptionA: description,
        maxPlayersA: maxPlayers,
      });
      CreateNewGame(title,location,sportType,startDate,endDate,description,maxPlayers,currentUser);
      console.log("Here Alrdy")
      //NEED SOME CODE HERE TO CREATE A NEW DOC IN FIRESTORE
      //NEED TO IMPORT CreateNewGame() from CreateGameController
      setSuccess("Game is successfully created. Redirecting to profile page...");
      setTimeout(function() {
        navigate("/profile");
      }, 3000);
    } catch(e) {
      if(e.type ===400){
        setError("User not found. Please login to create game.");
        setTimeout(function() {
          navigate("/login");
        }, 3000);
      }
      else{
      setError("Failed to Create A Game");
      }
    }

    setLoading(false);
  }

  return (
    <div>
      {!currentUser && <Alert severity="error">You are not logged in. Redirecting you to login page...</Alert>}
      {locations && currentUser && (
    <Box sx={{ bgcolor: "secondary.main", padding: 2, borderRadius: "8px" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AddCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create A Game
          </Typography>
          <Box component="form" onSubmit={handleSubmitCreateGame} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Game Title"
                  name="title"
                  onChange={handleChangeTitle}
                  value={title}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel required id="location">
                    Location
                  </InputLabel>
                  <Select
                    labelId="location"
                    id="location"
                    value={location}
                    onChange={handleChangeLocation}
                    fullWidth
                    label="Location"
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {locations.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel required id="sportType">
                    Sports Type
                  </InputLabel>
                  <Select
                    labelId="sportType"
                    id="sportType"
                    value={sportType}
                    onChange={handleChangeSport}
                    fullWidth
                    label="Sport Type"
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {sportTypes.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DateTimePicker
                      label="Start Date & Time"
                      id="startDate"
                      value={startDate}
                      onChange={handleChangeDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <DateTimePicker
                      label="End Date & Time"
                      id="endDate"
                      value={endDate}
                      onChange={handleChangeEndDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  fullWidth
                  rows={4}
                  name="description"
                  label="Description"
                  id="description"
                  onChange={handleChangeDescription}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <Typography id="input-slider" gutterBottom>
                  Max Players
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <GroupIcon />
                  </Grid>
                  <Grid item xs>
                    <Slider
                      value={typeof maxPlayers === "number" ? maxPlayers : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      defaultValue={2}
                      max={16}
                      min={2}
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      id="maxPlayers"
                      value={maxPlayers}
                      size="small"
                      onChange={handleSliderInputChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 1,
                        min: 1,
                        max: 12,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Game
            </Button>
            {success && <Alert severity="success">{success}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            {currentUser && <p>Current logged user is {currentUser.email}</p>}
          </Box>
        </Box>
      </Container>
    </Box>
      ) }
    </div>
  );
                    }
                    
