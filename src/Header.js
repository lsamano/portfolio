import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const Header = ({}) => {
  const [ anchorEl, setAnchorEl ] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
          >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
          <MenuItem onClick={handleClose} component={NavLink} to="/">Home</MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/about">About Me</MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/projects">Projects</MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/blog">Blog</MenuItem>
        </Menu>
        <Typography variant="h6">
          Leizl Samano
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
