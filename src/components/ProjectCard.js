import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  span: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: "5px",
    margin: "5px"
  },
  cardMedia: {
    width:"100%"
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}));

const ProjectCard = ({ title, subtitle, img_url, tags, shorthand }) => {
  const { span, cardMedia, tagContainer } = useStyles();

  const renderTags = () => (
    tags.map((tag, index) => (
      <span
        key={index}
        className={span}>
        {tag}
      </span>
    ))
  )

  return (
    <Card style={{width: "45%", margin: "20px"}}>
      <CardActionArea>
        <CardMedia
        component="img"
        src={img_url}
        alt="project image"
        className={cardMedia}
        />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {subtitle}
        </Typography>
        <div className={tagContainer}>
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
