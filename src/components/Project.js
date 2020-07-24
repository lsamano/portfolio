import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

// import PropTypes from 'prop-types';

const Project = ({}) => {
  const theme = useTheme();
  console.log(theme);
  const [ imageUrl, setImageUrl ] = useState("")

  useEffect(() => {
    fetch("https://api.github.com/repos/lsamano/tetris-v2/contents/images")
    .then(res => res.json())
    .then(data => setImageUrl(data[1].download_url))
  }, [])

  return (
    <Card>
  <CardContent>
    <Typography variant="h5" component="h2">
      Tetris v2
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Challenge your friends in Tetris
    </Typography>
    <Typography color="textPrimary">
      <span style={{backgroundColor: theme.palette.primary.dark, padding:"5px", margin:"5px"}}>
        JavaScript
      </span>
      <span style={{backgroundColor: theme.palette.primary.dark, padding:"5px", margin:"5px"}}>
        Express
      </span>
      <span style={{backgroundColor: theme.palette.primary.dark, padding:"5px", margin:"5px"}}>
        WebSockets
      </span>
    </Typography>
    <CardMedia
      component="img"
      src={imageUrl}
      alt="project image"
      style={{width:"40vw", marginTop:"10px"}}
      />
  </CardContent>
</Card>

  );
}

// Project.propTypes = {
//   : PropTypes.
// };

export default Project;
