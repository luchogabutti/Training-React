import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props) => {
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      />
      <Typography variant="h4" sx={{ flexGrow: 1 }}>
        Lucho TV
      </Typography>
    </Toolbar>
  </AppBar>
  );
};

export default Header;