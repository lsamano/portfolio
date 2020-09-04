import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const ProgressBar = ({ completed, tech }) => {
  const theme = useTheme();

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    // borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  const spanStyles = {
    marginTop: 10,
    height: 20,
    paddingLeft: "8px",
    textAlign: "center",
    color: "white",
    backgroundColor: theme.palette.primary.light
  }

  return (
    <div style={{display: "flex"}}>
    <span style={spanStyles}>{tech}</span>
    <div style={containerStyles}>
      <div style={fillerStyles}>
      <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
    </div>
  );
};

export default ProgressBar;
