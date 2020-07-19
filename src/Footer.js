import React from 'react';
// import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const Footer = () => {

  return (
    <>
    <Tooltip title="LinkedIn" arrow>
      <a href="https://www.linkedin.com/in/leizlsamano/">
        <IconButton className="fab fa-linkedin" fontSize="large"/>
      </a>
    </Tooltip>
    <Tooltip title="GitHub" arrow>
      <a href="https://github.com/lsamano">
        <IconButton className="fab fa-github" fontSize="large"/>
      </a>
    </Tooltip>
    <Tooltip title="Medium" arrow>
      <a href="https://medium.com/@leizl.samano">
        <IconButton className="fab fa-medium" fontSize="large"/>
      </a>
    </Tooltip>
    </>
  );
}

export default Footer;
