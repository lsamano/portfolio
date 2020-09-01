import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#27299a",
    color: "white"
  },
  icon: {
    color: "white"
  }
}))

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Tooltip title="LinkedIn" arrow>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leizlsamano/">
          <IconButton className={`fab fa-linkedin ${classes.icon}`} fontSize="large" />
        </a>
      </Tooltip>
      <Tooltip title="GitHub" arrow>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/lsamano">
          <IconButton className={`fab fa-github ${classes.icon}`} fontSize="large"/>
        </a>
      </Tooltip>
      <Tooltip title="Medium" arrow>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@leizl.samano">
          <IconButton className={`fab fa-medium ${classes.icon}`} fontSize="large"/>
        </a>
      </Tooltip>
      <br/>
      <span className="copyright">Copyright © 2020 Leizl Samano. All rights reserved.</span>
    </footer>
  )
}

export default Footer;
