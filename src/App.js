import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header>
        Header
      </header>
      <main>
        <Switch>
          <Route component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
