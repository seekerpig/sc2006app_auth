import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
//import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { useAuth } from "../../Control/SessionController";
import logo from "./images/Black_50.png";
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userExist, setUserExist] = React.useState(false);
  const { currentUser, logout } = useAuth();

  React.useEffect(() => {
    if (currentUser !== null){
      setUserExist(true);
    }
    else
    {
      setUserExist(false);
    }
  });
  

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const SignOut = () => {
    setAnchorElUser(null);
    logout();
  };

  return (
    // <Container  style={{ background: "#ffffff", p: 0}}>
      <AppBar position="fixed" color="secondary" elevation={0}  >
        <Container sx={{p: 0 }} >
        <Toolbar>
          <Box sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}>
          <a href="/"><img height="50" src={logo} alt="logo"/></a>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SportSG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Button
              sx={{ display: "inline-flex" }}
              startIcon={<AddIcon />}
              variant="contained"
              href="/creategame"
            >
              Game
            </Button>
          </Box>
          
          <Box sx={{flexGrow: 1, display: { xs: "flex", md: "none" }}}>
          <a href="/"><img height="50" src={logo} alt="logo"/></a>
          </Box>
          
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SportSG
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0, mr: 2, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{ display: "inline-flex" }}
              startIcon={<AddIcon />}
              variant="contained"
              href="/creategame"
            >
              Create Game
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Profile">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
                sx={{ml:{md: 0, sm: 5, xs: 5}}}
              >
                <AccountCircle fontSize="large" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userExist &&<MenuItem
                onClick={handleCloseUserMenu}
                component="a"
                href="/profile"
              >
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              }
              {!userExist &&<MenuItem
                onClick={handleCloseUserMenu}
                component="a"
                href="/login"
              >
                <Typography textAlign="center">Login</Typography>
              </MenuItem>}
              {!userExist &&<MenuItem
                onClick={handleCloseUserMenu}
                component="a"
                href="/signup"
              >
                <Typography textAlign="center">Sign Up</Typography>
              </MenuItem>}
              {userExist && <MenuItem onClick={SignOut} component="a" href="/">
                <Typography textAlign="center">Log Out</Typography>
              </MenuItem>}
            </Menu>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
// </Container>
  );
};
export default Navbar;
