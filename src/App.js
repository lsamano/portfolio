import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from './ScrollTop';
import Header from './Header';
import Footer from './Footer';
import pages from './pages';
import { projects } from './info';

function App() {
  const { Home, About, Projects, Blog, OneProject } = pages;

  return (
    <div className="App">
      <header>
        <Header />
        <Toolbar id="back-to-top-anchor" />
          <ScrollTop>
            <Fab color="secondary" size="large" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
      </header>
      <main>
        <Container className="main-div">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" exact render={routerProps => <Projects projects={projects} {...routerProps} />} />
            <Route path="/projects/:title" render={routerProps => <OneProject project={projects[routerProps.match.params.title]} {...routerProps} />} />
            <Route path="/blog" component={Blog} />
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
