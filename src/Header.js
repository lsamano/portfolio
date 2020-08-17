import React, { useState, useEffect, useRef } from 'react';
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
// import { HashLink as Link } from 'react-router-hash-link';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import HideOnScroll from "./HideOnScroll"
import ScrollTop from './ScrollTop';

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const style = {
    marginRight: theme.spacing(2)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value !== 0) {
      const anchor = document.querySelector(`#projects`);

      if (anchor) {
        anchor.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
      }

    }
  }, [value])

  //// Scroll Watcher
  const element = useRef(null)
  const checkpoint = useRef(300)
  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => element.current.style.backgroundColor = `${theme.palette.secondary.main}25`, [])

  useEffect(() => {

    listener = document.addEventListener("scroll", e => {
      const currentScroll = window.pageYOffset;
      let color = theme.palette.secondary.main
      if (currentScroll <= checkpoint.current) {
        color = `${color}25`;
      } else if (currentScroll < 900) {
        const valNum = currentScroll * 100 / 900;
        const decimalValue = Math.round(valNum*255/100);
        let hexValue;
        if (valNum < 7) {
            hexValue = "0"+decimalValue.toString(16).toUpperCase();
        }
        else {
            hexValue = decimalValue.toString(16).toUpperCase();
        }
        color = `${color}${hexValue}`;
      } else {
        color = `${color}FF`;
      }
      element.current.style.backgroundColor = color;
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])
  })
  ////

  return (
    <>
      <HideOnScroll>
        <AppBar ref={element}>
          <Toolbar>
            <i className="fas fa-laptop-code fa-2x" style={style}></i>
            <Typography variant="h6">
              Leizl Samano
            </Typography>
            <section style={{marginLeft: "auto", marginRight: "-12", display:"flex"}}>
              <Tabs value={value} indicatorColor="primary" onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Projects" />
                <Tab label="Blog" />
                <Button variant="outlined" color="primary" style={{marginLeft:"30px"}}>Contact Me</Button>
              </Tabs>
            </section>
          </Toolbar>


        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </>
  );
}

export default Header;
