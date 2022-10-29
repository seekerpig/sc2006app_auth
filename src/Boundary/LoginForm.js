import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useAuth } from "../Control/SessionController";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Control/LoginValidator";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a href="https://sc2006app.web.app/">TechnicalWizards</a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

/**
 * This method is called when the user accessed the Login Page
 * @returns HTML
 */
export default function LoginForm() {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let email = "";
  let password = "";

  /**
   * This method will log user in if the login button is pressed
   * @param {Object} event click event from HTML
   * @returns the status of the sign up (Loading, Error, Success)
   */
  async function handleSubmitLogin(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    email = data.get("email");
    password = data.get("password");

    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await loginUser(email, password);
      setSuccess("Login Successful! Redirecting...");
      setTimeout(function () {
        navigate("/");
      }, 2000);
    } catch {
      setError("Incorrect Email Address or Password. Please try again.");
    }

    setLoading(false);
  }

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        padding: 2,
        borderRadius: "8px",
        minHeight: 800,
      }}
    >
      <Container component="main" maxWidth="xs" sx={{ py: 12 }}>
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
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmitLogin}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
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
            </Grid>
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            {success && <Alert severity="success">{success}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup" variant="body2">
                  New Here? Sign Up
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
