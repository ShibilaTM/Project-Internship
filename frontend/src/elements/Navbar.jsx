import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'white', color: 'black' }}>
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Intenship Portal
            </Typography>
            <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Home</Link></Button>
            {/* <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'black' }} to={'/internship'}>Internship</Link></Button> */}
            <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'black' }} to={'/signup'}>Signup</Link></Button>
            <Button color="inherit"><Link style={{ textDecoration: 'none', color: 'black' }} to={'/Login'}>Login</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}

export default Navbar
