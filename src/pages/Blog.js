import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { blog } from '../info';

const Blog = ({ myRef }) => {
  const formatBlogs = () => {
    return blog.map(story => (
      <Card style={{width: "30%", margin: "10px"}}>
        <CardActionArea style={{height: "100%"}}>
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
    ))
  }

  return (
    <section className="blog section" id="blog" ref={myRef}>
      <Container>
        <Typography variant="h2" component="h2" align="center">
          Blogs
        </Typography>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
          { formatBlogs() }
        </div>
      </Container>
  </section>
  );
}

// Blog.propTypes = {
//   : PropTypes.
// };

export default Blog;
