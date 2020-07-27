import React from 'react';
import Typography from '@material-ui/core/Typography';


const About = ({}) => {
  return (
    <>
    <img src={require("../images/avatar.jpg")} alt="Leizl Samano" style={{"borderRadius":"50%"}}/>
    <Typography variant="h2" component="h2">
    About Me
    </Typography>
    <Typography variant="body1">
    I'm Leizl, I'm a Software Engineer.
    </Typography>

    <Typography variant="h2" component="h2">
    My Current Skills
    </Typography>
    <Typography variant="body1">
    HTML5, CSS3, JavaScript, React.js, Redux, Ruby, Ruby on Rails, PostgreSQL, MongoDB
    </Typography>

    <Typography variant="h2" component="h2">
    My Experience
    </Typography>
    <Typography variant="h6" component="h6">
    Software Engineering Coach at Flatiron School
    </Typography>
    <Typography variant="body1">
    Worked with students learning programming.
    </Typography>
    </>
  );
}

export default About;
