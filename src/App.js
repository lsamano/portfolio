import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route component={Home} />
        </Switch>
      </main>
      <footer>
        <Tooltip title="LinkedIn" arrow>
          <IconButton className="fab fa-linkedin" fontSize="large"/>
        </Tooltip>
        <Tooltip title="GitHub" arrow>
        <IconButton className="fab fa-github" fontSize="large"/>
        </Tooltip>
        <Tooltip title="Medium" arrow>
        <IconButton className="fab fa-medium" fontSize="large"/>
        </Tooltip>
      </footer>
    </div>
  );
}

export default App;
