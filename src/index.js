import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter as Router } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    // background: {
    //   default: "#fff"
    // },
    primary: {
      main: "#de119025",
      // main: "#225c9e95",
      light: "#ff5bc0",
      dark: "#a70062",
      contrastText: "#ffffff"
    },
    secondary: {
      main: '#de1190',
      light: "#ff5bc0",
      dark: "#a70062",
      contrastText: "#ffffff"
    },
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
