import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  button: {
    position: 'absolute',
    bottom: "9%",
    left: "0px",
    height: "90px",
    width: "100%",
  },
  mobileButton: {
    height: "90px",
    width: "90%",
  }
});

const Home = ({ setValue, myRef }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:865px)');

  return (
    <section id="home" ref={myRef}>
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
      <Button className={matches ? classes.mobileButton : classes.button}
        color="inherit" size="large" variant="outlined"
        onClick={() => document.querySelector("#about").scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"}) }>
        <i className="fas fa-angle-double-down fa-2x"></i>
      </Button>
    </Container>
    </section>
  )
}

export default Home;
