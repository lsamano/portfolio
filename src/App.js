import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Container className="main-div">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
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
