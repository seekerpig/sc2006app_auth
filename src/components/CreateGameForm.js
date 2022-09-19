import React from 'react'
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, Alert, MenuItem, InputLabel, FormControl  } from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Game from "./entities/Game";
import Select from '@mui/material/Select';

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
  const { currentUser, signup } = useAuth();


  const [location, setLocation] = React.useState('');
  const [sport, setSport] = React.useState('');

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeSport = (event) => {
    setSport(event.target.value);
  };

  //console.log(currentUser);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    if (data.get('password') === 'abc') {
      return setError('Password is wrong testing!');
    }

    try {
      setLoading(true);
      setError('');
      await signup(data.get('email'), data.get('password'));
      navigate('/login');
    } catch {

      setError('Failed to Create Account');
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
            <MenuItem >{item}</MenuItem>
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
            <MenuItem >{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="number"
                  id="phoneNumber"
                  autoComplete="tel-national"
                />
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
                <Button variant="outlined" component="label">
                  Upload Your Profile Picture
                  <input accept="image/*" type="file" id="img" name="img" />
                </Button>

              </Grid>


            </Grid>
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>å
            {error && <Alert severity="error">{error}</Alert>}
            {currentUser && <p>Current logged user is {currentUser.email}</p>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
