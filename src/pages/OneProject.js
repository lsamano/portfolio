import React from 'react';
import PropTypes from 'prop-types';

const OneProject = ({ project: { title, subtitle, tags, img_url } }) => {
  return (
    <div>
      <img src={img_url} alt="Preview" style={{width: "50%"}}/>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{tags.join(", ")}</p>
    </div>
  );
}

OneProject.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tags: PropTypes.array,
  img_url: PropTypes.string,
};

export default OneProject;
