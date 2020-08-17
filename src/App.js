import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import pages from './pages';
import { projects } from './info';

function App() {
  const { Home, About, Projects, Blog, OneProject } = pages;

  return (
    <div className="App">
        <Header />
      <main>
        <Container className="main-div">
          <Home />
          <About />
          <Projects projects={projects} />
          {/*<Blog />*/}
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
