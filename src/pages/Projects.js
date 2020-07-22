import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';

const Projects = ({}) => {
  const [ imageUrl, setImageUrl ] = useState("")
  useEffect(() => {
    fetch("https://api.github.com/repos/lsamano/tetris-v2/contents/images")
    .then(res => res.json())
    .then(data => setImageUrl(data[1].download_url))
  }, [])

  return (
    <>
    <img src={imageUrl} alt="project image" style={{height: "50%", width: "50%"}}/>
    <Typography variant="h2" component="h2" gutterBottom>
      Projects
    </Typography>
    <Typography variant="h6" component="h6" gutterBottom>
      Personal Projects
    </Typography>
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
