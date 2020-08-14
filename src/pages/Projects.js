import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Typography from '@material-ui/core/Typography';

const Projects = ({ projects }) => {
  const renderCards = () => {
    const projectCards = [];
    for (const [name, proj] of Object.entries(projects)) {
      projectCards.push(<ProjectCard {...proj} key={name} />)
    }
    return projectCards
  }

  return (
    <>
    <Typography variant="h2" component="h2" gutterBottom>
      Projects
    </Typography>

    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {renderCards()}
    </div>

    <Typography variant="h6" component="h6" gutterBottom>
      Apps for Learning
    </Typography>
    <Typography variant="body1" gutterBottom>
      As a teacher/coach at Flatiron School, I made a few "mini" projects designed to help students learn the fundamentals of software engineering. Here are just a few!
    </Typography>
    </>
  );
}

export default Projects;
