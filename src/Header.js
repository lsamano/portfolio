import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CodeIcon from '@material-ui/icons/Code';
import { useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { HashLink as Link } from 'react-router-hash-link';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import HideOnScroll from "./HideOnScroll"
import ScrollTop from './ScrollTop';

const Header = () => {
  const [ anchorEl, setAnchorEl ] = useState(null);
  const theme = useTheme();

  const style = {
    marginRight: theme.spacing(2)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ScrollToSection = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#projects');

    if (anchor) {
      console.log(anchor.scrollIntoView);
      // anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      anchor.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
      // window.scrollTo(0, anchor.offsetTop)
    }
  };

  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
              style={style} >
              <CodeIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose} >
              <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about">About Me</MenuItem>
              <MenuItem><span onClick={ScrollToSection}>Projects</span></MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/blog">Blog</MenuItem>
            </Menu>
            <Typography variant="h6">
              Leizl Samano
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </>
  );
}

export default Header;
