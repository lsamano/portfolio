import React, { useEffect, useRef, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import HideOnScroll from "./HideOnScroll"
import ScrollTop from './ScrollTop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.light,
    marginLeft: "30px",
    // marginRight: theme.spacing(10),
  },
  text: {
    whiteSpace: "nowrap"
  },
  icon: {
    // marginLeft: theme.spacing(10),
    marginRight: theme.spacing(2)
  },
  list: {
    width: "200px"
  }
}));

const Header = ({ value, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [ drawer, setDrawer ] = useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(open);
  };

  const handleChange = (event, newValue) => {
        let anchor;
        switch (newValue) {
          case 0:
          anchor = document.querySelector("#back-to-top-anchor");
          break;
          case 1:
          anchor = document.querySelector("#about");
          break;
          case 2:
          anchor = document.querySelector("#projects");
          break;
          case 3:
          anchor = document.querySelector("#blog");
          break;
          default:
          anchor = document.querySelector("#contact-me");
          break;
        }
        if (anchor) {
          anchor.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
        }
    setValue(newValue);
  };

  //// Scroll Watcher
  const appBarEl = useRef(null)
  const checkpoint = useRef(300)

  useEffect(() => {
    appBarEl.current.style.backgroundColor = `${theme.palette.secondary.main}25`

    const listener = document.addEventListener("scroll", event => {
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
        } else {
            hexValue = decimalValue.toString(16).toUpperCase();
        }
        color = `${color}${hexValue}`;
      } else {
        color = `${color}FF`;
      }
      appBarEl.current.style.backgroundColor = color;
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [theme])
  })
  ////

  return (
    <>
      <HideOnScroll>
        <AppBar ref={appBarEl}>
          <Toolbar>
            <i className={`fas fa-laptop-code fa-2x ${classes.icon}`} ></i>
            <Typography variant="h6" className={`logo-and-name ${classes.text}`}>
              Leizl Samano
            </Typography>
            <section className="tabs">
              <Tabs value={value} indicatorColor="primary"
                onChange={handleChange}
                aria-label="simple tabs example" variant="fullWidth">
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Projects" />
                <Tab label="Blog" />
              </Tabs>
              <Button
                variant="outlined"
                color="primary"
                className={`contact-button ${classes.root} ${classes.text}`}
                onClick={event => handleChange(event, 4)}
                >Contact Me</Button>
            </section>
            <section className="burger">
              <i className={`fas fa-bars fa-2x`} onClick={toggleDrawer(true)}></i>
                <Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)}>
                  <div
                    role="presentation"
                    className={classes.list}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}>
                  <List component="nav">
                    {['Home', 'About', 'Projects', 'Blog'].map((text, index) => (
                      <ListItem button key={text} onClick={event => handleChange(event, index)}>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                    <Divider/>
                    <ListItem button onClick={event => handleChange(event, 4)}>
                      <ListItemText primary="Contact Me" />
                    </ListItem>
                  </List>
                </div>
              </Drawer>
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
