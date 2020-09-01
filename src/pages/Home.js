import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'white',
    maxWidth: "50%"
  },
  button: {
    position: 'absolute',
    bottom: "0px"
  }
});

const Home = ({ setValue, myRef }) => {
  const classes = useStyles();
  return (
    <section className={`section ${classes.root}`} id="home" ref={myRef}>
      <Container className="home-column">
      <Typography variant="h2" component="h2" gutterBottom>
        Hi, I'm Leizl.
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        Full Stack Software Engineer.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to my site. This site was made using React.js and Material-UI for styling.
        <br/> To continue exploring, please scroll down and enjoy.
      </Typography>
      <br/>
      <Button className={`long-button ${classes.button}`}
        color="inherit" size="large" variant="outlined"
        onClick={() => document.querySelector("#about").scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"}) }>
        <i className="fas fa-angle-double-down fa-2x"></i><span style={{fontSize:"2em", paddingLeft:"10px"}}>Keep Going...</span>
      </Button>
    </Container>
    </section>
  )
}

export default Home;
