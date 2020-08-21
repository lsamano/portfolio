import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StoryCard = ({ story }) => {
  return (
    <Card style={{width: "30%", margin: "10px"}}>
      <CardActionArea style={{height: "100%"}} href={story.url}>
        <CardContent style={{height: "100%"}}>
          <Typography style={{fontSize: 18}}>
            {story.title}
          </Typography>
          <Typography color="textSecondary">
            {story.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

StoryCard.propTypes = {
  story: PropTypes.object
};

export default StoryCard;
