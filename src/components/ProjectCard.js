import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

// import PropTypes from 'prop-types';

const ProjectCard = ({title, subtitle, img_url, tags}) => {
  const theme = useTheme();

  const renderTags = () => (
    tags.map((tag, index) => (
      <span
        key={index}
        style={{
          backgroundColor: theme.palette.secondary.light,
          padding: "5px",
          margin: "5px",
          // flex: "0 1 24%"
        }}>
        {tag}
      </span>
    ))
  )

  return (
    <Card style={{width: "45%"}}>
    <CardActionArea>
    <CardMedia
    component="img"
    src={img_url}
    alt="project image"
    style={{width:"100%"}}
    />
  <CardContent >
    <Typography variant="h5" component="h2">
      {title}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      {subtitle}
    </Typography>
    <Typography color="textPrimary">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {renderTags()}
        </div>
    </Typography>
  </CardContent>
  </CardActionArea>
</Card>

  );
}

// ProjectCard.propTypes = {
//   : PropTypes.
// };

export default ProjectCard;
