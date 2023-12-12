
import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Dialog, DialogContent, IconButton, Menu, MenuItem, Toolbar, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoImage from '../../Images/Logo_ict.png';
import Login from '../../ui-components/Login';
import Signup from '../../ui-components/Signup';
import { Link } from 'react-router-dom';

const Navbarcopy = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLogin = () => {
    setOpenLogin(true);
    handleCloseNavMenu(); // Close the menu when login is opened
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
    handleCloseNavMenu(); // Close the menu when login is opened
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  return (
    <AppBar position="static" style={{ background: 'red', color: 'black', height: "100px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <img
            src={LogoImage}
            alt="Logo"
            style={{
              height: '30px', // Adjust the height as needed
              marginRight: '10px', // Adjust the margin
            }}
          />

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Internship Portal
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: 'black' }}
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
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenLogin}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenSignup}>
                <Typography textAlign="center">Signup</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Home
            </Button>

            <Button
              onClick={handleOpenSignup}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Signup
            </Button>
            <Button
              onClick={handleOpenLogin}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* Login Dialog */}
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogContent
          sx={{
            width: '100%',
            maxHeight: '80vh', // Adjust the maxHeight value as needed
            overflowY: 'auto',
            '@media (min-width: 600px)': {
              width: '600px',
              maxHeight: '80vh', // Adjust the maxHeight value for larger screens
            },
          }}
        >
          <Login />
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={openSignup} onClose={handleCloseSignup}>
        <DialogContent
          sx={{
            width: '100%',
            maxHeight: '100%',
            overflowY: 'auto',
            '@media (min-width: 600px)': {
              width: '600px',
              maxHeight: '140vh',
            },
          }}
        >
          <Signup />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Navbarcopy;
