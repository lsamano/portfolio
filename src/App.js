import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import pages from './pages';
import { projects } from './info';

function App() {
  const { Home, About, Projects, } = pages;

  return (
    <div className="App">
        <Header />
      <main>
        <Container className="main-div">
          <Home />
          <About />
        </Container>
          <Projects projects={projects} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
