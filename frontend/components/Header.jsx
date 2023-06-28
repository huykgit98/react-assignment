import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Avatar, Box, Tooltip } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const settings = ['Logout'];

export default function StickyHeader ({wallet}) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const signOut = () => { wallet.signOut() }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    if (event.target.innerText === "Logout") {
      signOut();
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "transparent" }}>
      <Toolbar>
      <img src="https://rep.run/_next/static/media/RepIcon.41878db9.svg" alt="App Icon" style={{ marginRight: '0.5rem', height: '24px' }} />
      <Typography variant="h6" sx={{ flexGrow: 1, color: "#A6A6AA" }}>
          Rep
        </Typography>
        <Button color="inherit">Trending</Button>
        <Button color="inherit">New</Button>
        <Button color="inherit">Hot</Button>
        <IconButton color="inherit">
          <ChatIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


      </Toolbar>
      
    </AppBar>
  );
};

