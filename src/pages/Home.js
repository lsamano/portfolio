import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
        Leizl Samano
      </Typography>
      <Typography variant="h4" gutterBottom>
        Full Stack Software Engineer
      </Typography>
      <ButtonGroup
        orientation="vertical"
        size="large"
        color="secondary"
        aria-label="vertical contained secondary button group"
        variant="text">
        <Button startIcon={<Icon className="fas fa-user-circle"/>} component={Link} to="/about">About Me</Button>
        <Button startIcon={<Icon className="fas fa-terminal"/>} component={Link} to="/projects">Projects</Button>
        <Button startIcon={<Icon className="fas fa-file-alt"/>} component={Link} to="/resume">Resume</Button>
        <Button startIcon={<Icon className="fas fa-pen-fancy"/>} component={Link} to="/blog">Blog</Button>
      </ButtonGroup>
    </>
  )
}

export default Home;
