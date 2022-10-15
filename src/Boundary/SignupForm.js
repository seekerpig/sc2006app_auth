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
import { useAuth } from "../Control/SessionController";
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
  const { currentUser } = useAuth();
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
   * @param {Object} event
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

      if (data.get("password").length <= 5) {
        setError("Password Length is Not Long Enough");
        return;
      }

      //CODE FOR CREATING USER:
      //NEED CODE TO UPLOAD IMAGE TO FIREBASE
      //AFTER UPLOAD, add all the parameters to the SignUp function, it needs more, see SignUpController.js for full parameters.

      await SignUp(email, password, name, phoneNumber, description, profileUrl)
        .then(() => {
          //const { currentUser } = useAuth();
          if (currentUser !== null) {
            console.log("Sign Up Successful");
            setSuccess("Signup is successful! Redirecting to login page...");
            //setError("");
            setTimeout(function () {
              navigate("/profile");
            }, 3000);
          } else {
            console.log("Not successful");
            console.log(currentUser);
            setError("Email is registered");
            setTimeout(function () {
              navigate("/signup");
            }, 5000);
          }
        })
        .catch((error) => {
          console.log("error at sign up form");
          console.log(error.type);
        });
    } catch {
      setError("Failed to Create Account");
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
            </Button>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Box>
  );
}
