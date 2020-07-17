import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
// import PersonIcon from '@material-ui/icons/Person';
// import CodeIcon from '@material-ui/icons/Code';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';


const Home = () => {
  return (
    <Container component={Paper} className="main-div">
    <img src="/images/avatar.jpg" style={{"borderRadius":"50%"}}/>
    <Typography variant="h1" component="h2" gutterBottom>
      Leizl Samano
    </Typography>
    <Typography variant="h4" color="primary" gutterBottom>
      Full Stack Software Engineer
    </Typography>

    <ButtonGroup size="large" color="secondary" aria-label="large outlined button group">
      <Button startIcon={<Icon className="fas fa-user-circle"/>}>About Me</Button>
      <Button startIcon={<Icon className="fas fa-terminal"/>}>Projects</Button>
      <Button startIcon={<Icon className="fas fa-file-alt"/>}>Resume</Button>
      <Button startIcon={<Icon className="fas fa-pen-fancy"/>}>Blog</Button>
    </ButtonGroup>
    </Container>
  )
}

export default Home;
