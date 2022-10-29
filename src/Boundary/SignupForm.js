import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { useAuth } from "../Control/SessionController";
//import { checkLoggedIn } from "../Control/LoginValidator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../Control/SignUpController";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        TechnicalWizards
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

/**
 * This method is called when the user accessed the Sign Up Page
 * @returns HTML
 */
export default function SignUpForm() {
 // var { currentUser } = checkLoggedIn();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let name = "";
  let email = "";
  let password = "";
  let phoneNumber;
  let description = "";
  let profileUrl = "";

  /**
   * This method will sign user up if the sign up button is pressed
   * @param {Object} event click event from HTML
   * @returns the status of the sign up (Loading, Error, Success)
   */
  async function handleSubmitSignUp(event) {
    event.preventDefault();
    setError("");
    setSuccess("");
    const data = new FormData(event.currentTarget);
    name = data.get("firstName") + " " + data.get("lastName");
    email = data.get("email");
    password = data.get("password");
    phoneNumber = data.get("phoneNumber");
    description = data.get("description");
    profileUrl = data.get("img");
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // ERROR CHECKING SECTION!
      if (data.get("firstName").length === 0) {
        setError("First name cannot be empty.");
        setLoading(false);
        return;
      }
      if (data.get("firstName").length >= 100) {
        setError("First name is too long.");
        setLoading(false);
        return;
      }
      if (data.get("lastName").length === 0) {
        setError("Last name cannot be empty.");
        setLoading(false);
        return;
      }
      if (data.get("lastName").length >= 100) {
        setError("Last name is too long.");
        setLoading(false);
        return;
      }
      if (data.get("email").length === 0) {
        setError("Email cannot be empty.");
        setLoading(false);
        return;
      }
      //regex for checking email
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!data.get("email").toLowerCase().match(re)) {
        setError("Email is invalid.");
        setLoading(false);
        return;
      }
      if (data.get("password").length <8) {
        setError("Password Length is Not Long Enough");
        setLoading(false);
        return;
      }

      if (data.get("password").length >127) {
        setError("Password Length is Too Long");
        setLoading(false);
        return;
      }
      var pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //regex for Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
      if (!data.get("password").match(pw))
      {
        setError("Password not valid. Password must have at least a upper case letter, a lower case letter, a number and a special character");
        setLoading(false);
        return;
      }
      if (data.get("phoneNumber").length === 0) {
        setError("Phone number cannot be empty");
        setLoading(false);
        return;
      }
      if (data.get("description").length <= 10 ) {
        setError("Description is too short. It must be at least 10 characters.");
        setLoading(false);
        return;
      }
      if (data.get("description").length > 512) {
        setError("Description is too long. It must be less than 512 characters.");
        setLoading(false);
        return;
      }
      if (data.get("img").name === "") {
        setError("Image not found. Please upload an image.");
        setLoading(false);
        return;
      }

      await SignUp(
        email,
        password,
        name,
        phoneNumber,
        description,
        profileUrl,
      ).then((e) => {
        console.log("Sign up form here");
        console.log(e);
        //const { currentUser } = useAuth();
        if(e === 200 ){
          console.log("Sign Up Successful");
      setSuccess("Signup is successful! Redirecting to profile page...");
      //setError("");
      setLoading(false);
      setTimeout(function() {
        navigate("/profile");
      }, 3000);}
      else if (e===400){
        //console.log("Not successful");
        //console.log(currentUser);
        setError("Email is registered!");
      }
      else{
        console.log("Undefined");
      }
    }
      ).catch((error) => {
        console.log("error at sign up form")
        console.log(error.type);
        setLoading(false);
      })
    } catch {
      setError("Failed to Create Account");
      setLoading(false);
    }
    console.log("Here is loading");
    setLoading(false);
  }

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        padding: 2,
        borderRadius: "8px",
        minHeight: 1000,
      }}
    >
      <Container component="main" maxWidth="xs" sx={{ pt: 5 }}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmitSignUp}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
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
                  <input accept="image/*" type="file" id="img" name="img" required/>
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
            </Button>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Box>
  );
}
