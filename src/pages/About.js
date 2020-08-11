import React from 'react';
import Typography from '@material-ui/core/Typography';
import avatar from '../images/avatar.jpg';
import { about } from '../info.js';
import {
  DiHtml5,
  DiCss3,
  DiRor,
  DiRuby,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiMongodb } from 'react-icons/di';

const About = () => {
  const { summary, skills } = about;
  return (
    <>
    <img src={avatar} alt="Leizl Samano" style={{"borderRadius":"50%"}}/>
    <Typography variant="h2" component="h2">
    About Me
    </Typography>
    <Typography variant="body1">
      { summary }
    </Typography>

    <Typography variant="h2" component="h2">
    My Current Skills
    </Typography>
    <Typography variant="body1">
      { skills }
    </Typography>
    <div className="dev-icons">
      <DiHtml5 size={32}/>
      <DiCss3 size={32}/>

      <DiJavascript1 size={32}/>
      <DiNodejs size={32}/>
      <DiReact size={32}/>

      <DiRuby size={32}/>
      <DiRor size={32}/>

      <DiPostgresql size={32}/>
      <DiMongodb size={32}/>
    </div>

    <Typography variant="h2" component="h2">
    My Experience
    </Typography>
    <Typography variant="h6" component="h6">
    Software Engineering Coach at Flatiron School
    </Typography>
    <Typography variant="body1">
    Worked with students learning programming.
    <br/>
    Size: 200+ employees
    <br/>
    Industry: Education
    </Typography>
    </>
  );
}

export default About;
