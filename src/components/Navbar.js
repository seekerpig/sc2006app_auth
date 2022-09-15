import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/system';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SportsBasketballIcon sx={{ fontSize: 28, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              VERSA
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" href="./creategame" >Create Game</Typography>
                  </MenuItem>
              </Menu>
            </Box>
            <SportsBasketballIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              VERSA
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
            <Box sx={{ flexGrow: 0, mr:2, display: { xs: 'none', md: 'flex'} }}>
                <Button
                sx={{ display: 'inline-flex'}}
                  startIcon={<AddIcon />}
                  variant="contained"
                  color="secondary"
                  enableElevation
                  href="./creategame"
                >
                  Create Game
                </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
              //   aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
              >
                <AccountCircle sx={{fontSize: 28}}/>
              </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                
                  <MenuItem  onClick={handleCloseUserMenu} component="a" href="/profile" >
                    <Typography textAlign="center"  >Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu} component="a" href="/login">
                    <Typography textAlign="center" >Login</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu} component="a" href="/signup">
                    <Typography textAlign="center" >Sign Up</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu} component="a" href="/">
                    <Typography textAlign="center" >Log Out</Typography>
                  </MenuItem>
                
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default Navbar;