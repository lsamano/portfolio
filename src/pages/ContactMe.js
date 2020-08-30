import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light
  },
  title: {
    color: "white",
  }
}))

const ContactMe = ({ myRef }) => {
  const classes = useStyles();

  return (
    <section id="contact-me" className={`contact-me section ${classes.root}`} ref={myRef}>
      <Typography variant="h2" className={classes.title} component="h2" gutterBottom align="center">
        Contact Me
      </Typography>
      <Container>
        Hi
      </Container>
    </section>
  )
};

export default ContactMe;
