import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { HashLink as Link } from 'react-router-hash-link';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import HideOnScroll from "./HideOnScroll"
import ScrollTop from './ScrollTop';

const Header = () => {
  // const [ anchorEl, setAnchorEl ] = useState(null);
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const style = {
    marginRight: theme.spacing(2)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const ScrollToSection = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#projects');

    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
    }
  };

  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <i className="fas fa-laptop-code fa-2x" style={style}></i>
            <Typography variant="h6">
              Leizl Samano
            </Typography>
            <section style={{marginLeft: "auto", marginRight: "-12"}}>
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Projects" />
                <Tab label="Blog" />
                <Button variant="outlined" color="secondary" style={{marginLeft:"30px"}}>Contact Me</Button>
              </Tabs>
            </section>
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
