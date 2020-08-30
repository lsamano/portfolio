import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    minHeight: "500px"
  },
  text: {
    color: "white",
    textAlign: "center"
  },
  link: {
    color: theme.palette.primary.light
  }
}))

const ContactMe = ({ myRef }) => {
  const classes = useStyles();

  return (
    <section id="contact-me" className={`contact-me section ${classes.root}`} ref={myRef}>
      <Typography variant="h2" className={classes.text} component="h2" gutterBottom>
        Contact Me
      </Typography>
      <Container className={classes.text}>
        <Typography variant="body1">
          Email me at <a href="mailto:leizl.samano@gmail.com" className={classes.link}>leizl.samano@gmail.com</a>.
        </Typography>
      </Container>
    </section>
  )
};

export default ContactMe;
