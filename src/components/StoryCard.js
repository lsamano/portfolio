import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: "30%",
    margin: "10px"
  },
  actionContent: {
    height: "100%"
  },
  titleFont: {
    fontSize: 18
  }
}));

const StoryCard = ({ story: { title, subtitle, url, img_url } }) => {
  const { root, actionContent, titleFont } = useStyles();
  return (
    <Card className={root}>
      <CardActionArea className={actionContent} href={url}>
        {img_url ? <CardMedia component="img" src={img_url} alt={title} /> : null}
        <CardContent className={actionContent}>
          <Typography className={titleFont}>
          {title}
          </Typography>
          <Typography color="textSecondary">
          {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

StoryCard.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    url: PropTypes.string,
  })
};

export default StoryCard;
