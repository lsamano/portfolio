import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Container component={Paper} className="main-div">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
