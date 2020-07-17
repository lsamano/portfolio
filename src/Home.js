import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';


const Home = () => {
  return (
    <div>
    <Typography variant="h1" component="h2" gutterBottom>
      Leizl Samano
    </Typography>
    <Typography variant="h4" gutterBottom>
      Software Engineer
    </Typography>
    <Tooltip title="LinkedIn" arrow>
      <IconButton className="fab fa-linkedin" fontSize="large"/>
    </Tooltip>
    <Tooltip title="GitHub" arrow>
    <IconButton className="fab fa-github" fontSize="large"/>
    </Tooltip>
    <Tooltip title="Medium" arrow>
    <IconButton className="fab fa-medium" fontSize="large"/>
    </Tooltip>
    </div>
  )
}

export default Home;
