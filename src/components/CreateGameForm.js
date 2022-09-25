import React from 'react'
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Alert, MenuItem, InputLabel, FormControl, Select, Slider, Stack } from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GroupIcon from '@mui/icons-material/Group';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Game from "./entities/Game";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MuiInput from '@mui/material/Input';


const Input = styled(MuiInput)`
  width: 42px;
`;

// RIGHT NOW THE LOCATIONS AND SPORTTYPE IS HARDCODED, YOU NEED TO RETRIEVE THE LIST OF LOCATIONS AND SPORTTYPE FROM DATABASE
// AND STORE INTO ENTITY OBJECT

const locations = [
  'Jurong Sports Hall',
  'Sengkang Community Centre',
  'Queenstown Sports Centre',
];

const sportType = [
  'Badminton',
  'Basketball',
  'Pingpong',
  'Soccer',
  'Cycling',
  'VolleyBall'
];

const theme = createTheme();
export default function Creategame() {
  const { currentUser} = useAuth();
  const today = new Date()

  const [date, setDate] = React.useState(dayjs(today));
  const [endDate, setEndDate] = React.useState(dayjs(today).add(60, 'minutes'));
  const [location, setLocation] = React.useState("");
  const [sport, setSport] = React.useState("");
  const [players, setPlayers] = React.useState(2);
  

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeSport = (event) => {
    setSport(event.target.value);
  };

  const handleChangeDate = (newValue) => {
    setDate(newValue);
  };

  const handleChangeEndDate = (newValue) => {
    if (newValue >= date) {
      setEndDate(newValue);
    }
    else {
      alert("End Date & Time cannot be earlier than Starting Date & Time")
    }

  };

  const handleSliderChange = (event, newValue) => {
    setPlayers(newValue);
  };
  const handleSliderInputChange = (event) => {
    setPlayers(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (players < 0) {
      setPlayers(0);
    } else if (players > 100) {
      setPlayers(100);
    }
  };


  //console.log(currentUser);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      location: location,
      sportType: sport,
      startDate: date,
      endDate: endDate,
      description: data.get('description'),
      maxPlayers: players,
    });

    try {
      setLoading(true);
      
      //NEED SOME CODE HERE TO CREATE A NEW DOC IN FIRESTORE
      setError('Game is successfully created. Redirecting to profile page...');
      setTimeout(function(){
        navigate('/profile');
      }, 3000); 
      
    } catch {

      setError('Failed to Create A Game');
    }

    setLoading(false);

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create A Game
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Game Title"
                  name="title"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel required id="location">Location</InputLabel>
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
                  <InputLabel required id="sportType">Sports Type</InputLabel>
                  <Select
                    labelId="sportType"
                    id="sportType"
                    value={sport}
                    onChange={handleChangeSport}
                    fullWidth
                    label="Sport Type"
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {sportType.map((item) => (
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
                      value={date}
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
                      value={typeof players === 'number' ? players : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      max='10'
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      id="maxPlayers"
                      value={players}
                      size="small"
                      onChange={handleSliderInputChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 1,
                        min: 1,
                        max: 10,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
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
            {error && <Alert severity="error">{error}</Alert>}
            {currentUser && <p>Current logged user is {currentUser.email}</p>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
