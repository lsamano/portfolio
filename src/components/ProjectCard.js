import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, subtitle, img_url, tags, shorthand }) => {
  const theme = useTheme();

  const style = {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: "5px",
    margin: "5px"
  }

  const renderTags = () => (
    tags.map((tag, index) => (
      <span
        key={index}
        style={style}>
        {tag}
      </span>
    ))
  )

  return (
    <Card style={{width: "45%", margin: "20px"}}>
    <CardActionArea component={Link} to={`/projects/${shorthand}`}>
    <CardMedia
    component="img"
    src={img_url}
    alt="project image"
    style={{width:"100%"}}
    />
  <CardContent>
    <Typography variant="h5" component="h2">
      {title}
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      {subtitle}
    </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {renderTags()}
        </div>
  </CardContent>
  </CardActionArea>
</Card>

  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img_url: PropTypes.string,
  tags: PropTypes.array,
  shorthand: PropTypes.string,
};

export default ProjectCard;
