import React from 'react';
// import PropTypes from 'prop-types';

const OneProject = ({ project: { title, subtitle, tags, img_url } }) => {
  // console.log(title, subtitle, tags, img_url);
  return (
    <div>
      <img src={img_url} alt="Preview" style={{width: "100%"}}/>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{tags.join(", ")}</p>
    </div>
  );
}

// OneProject.propTypes = {
//   : PropTypes.
// };

export default OneProject;
