import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'white'
  },
  button: {
    position: 'absolute',
    bottom: "0px"
  }
});

const Home = props => {
  const classes = useStyles(props);
  return (
    <section className={`home section ${classes.root}`} id="home">
      <div className="home-column">
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
      <Button className={`long-button ${classes.button}`} color="inherit" size="large" variant="outlined">
        <i className="fas fa-angle-double-down fa-2x"></i><span style={{fontSize:"2em", paddingLeft:"10px"}}>Keep Going...</span>
      </Button>
      </div>
    </section>
  )
}

export default Home;
