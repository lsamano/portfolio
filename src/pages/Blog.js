import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Blog = ({ myRef }) => {
  return (
    <section className="blog section" id="blog" ref={myRef}>
    <Typography variant="h2" component="h2" align="center">
    Blogs
    </Typography>
  </section>
  );
}

// Blog.propTypes = {
//   : PropTypes.
// };

export default Blog;
