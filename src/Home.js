import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
// import { DiHtml5, DiCss3, DiRor, DiRuby, DiJavascript1, DiReact, DiNodejs, DiPostgresql, DiMongodb } from 'react-icons/di';

const Home = () => {
  return (
    <>
      <img src="/images/avatar.jpg" alt="Leizl Samano" style={{"borderRadius":"50%"}}/>
      <Typography variant="h2" component="h2" gutterBottom>
        Leizl Samano
      </Typography>
      <Typography variant="h4" color="primary" gutterBottom>
        Full Stack Software Engineer
      </Typography>
      <ButtonGroup
        orientation="vertical"
        size="large"
        color="secondary"
        aria-label="vertical contained primary button group"
        variant="text">
        <Button startIcon={<Icon className="fas fa-user-circle"/>}>About Me</Button>
        <Button startIcon={<Icon className="fas fa-terminal"/>}>Projects</Button>
        <Button startIcon={<Icon className="fas fa-file-alt"/>}>Resume</Button>
        <Button startIcon={<Icon className="fas fa-pen-fancy"/>}>Blog</Button>
      </ButtonGroup>
    </>
  )
}

// <div className="dev-icons">
//   <DiHtml5 size={32}/>
//   <DiCss3 size={32}/>
//   <br/>
//   <DiJavascript1 size={32}/>
//   <DiNodejs size={32}/>
//   <DiReact size={32}/>
//   <br/>
//   <DiRuby size={32}/>
//   <DiRor size={32}/>
//   <br/>
//   <DiPostgresql size={32}/>
//   <DiMongodb size={32}/>
// </div>

export default Home;
