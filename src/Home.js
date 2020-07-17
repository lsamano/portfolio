import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
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
    <Icon className="fab fa-linkedin" fontSize="large"/>
    <Icon className="fab fa-github" fontSize="large"/>
    <Icon className="fab fa-medium" fontSize="large"/>
    </div>
  )
}

export default Home;
