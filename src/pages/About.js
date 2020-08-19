import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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
import ProgressBar from '../ProgressBar';

const About = () => {
  const { summary, skills } = about;

  return (
    <Paper component="section" className="about section">
      <Typography variant="h2" component="h2" align="center">
      About Me
      </Typography>
      <div className="row">
    <div className="column">
      <img src="/images/avatar.jpg" alt="Leizl Samano" className="avatar"/>
      <Typography variant="body1">
        { summary }
      </Typography>
      <br/>
      <br/>
      <Typography variant="h3" component="h3">
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
    </div>
    <div className="column">
    <Typography variant="h3" component="h3">
    My Current Skills
    </Typography>
    <ProgressBar completed={90} tech="JavaScript" />
    <ProgressBar completed={90} tech="React" />
    <ProgressBar completed={80} tech="HTML5" />
    <ProgressBar completed={70} tech="CSS3" />
    <ProgressBar completed={80} tech="Ruby" />
    <ProgressBar completed={80} tech="Rails" />
    <ProgressBar completed={70} tech="PostgreSQL" />
    <ProgressBar completed={50} tech="MongoDB" />
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
    </div>
  </div>
  </Paper>
  );
}

export default About;
