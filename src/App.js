import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import pages from './pages';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Container className="main-div">
          <Switch>
            <Route path="/" exact component={pages.Home} />
            <Route path="/about" component={pages.About} />
            <Route path="/projects" component={pages.Projects} />
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
