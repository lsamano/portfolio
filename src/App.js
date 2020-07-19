import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route component={Home} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
