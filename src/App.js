import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import pages from './pages';
import { projects } from './info';

function App() {
  const { Home, About, Projects, Blog } = pages;
  const [ value, setValue ] = useState(0);
  const homeEl = useRef(null);
  const aboutEl = useRef(null);
  const projectsEl = useRef(null);
  const blogEl = useRef(null);

  /////
  const isScrolledIntoView = (el) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }
  /////

  useEffect(() => {
    const listener = document.addEventListener("scroll", event => {
      if (isScrolledIntoView(blogEl.current)) {
        setValue(3);
      } else if (isScrolledIntoView(projectsEl.current)) {
        setValue(2);
      } else if (isScrolledIntoView(aboutEl.current)) {
        setValue(1);
      } else if (isScrolledIntoView(homeEl.current)) {
        setValue(0);
      }
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [])
  })

  return (
    <div className="App">
        <Header setValue={setValue} value={value} />
      <main>
        <Container className="main-div">
          <Home setValue={setValue} myRef={homeEl} />
          <About myRef={aboutEl}/>
        </Container>
          <Projects projects={projects} myRef={projectsEl} />
          <Blog myRef={blogEl} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
