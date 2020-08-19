import React, { useState, useEffect } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import pages from './pages';
import { projects } from './info';

function App() {
  const { Home, About, Projects, Blog } = pages;
  const [ value, setValue ] = useState(0);

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
      const projects = document.querySelector("#projects");
      const about = document.querySelector("#about");
      const home = document.querySelector("#home");
      const blog = document.querySelector("#blog");
      if (isScrolledIntoView(projects)) {
        setValue(2);
      } else if (isScrolledIntoView(about)) {
        setValue(1);
      } else if (isScrolledIntoView(home)) {
        setValue(0);
      } else if (isScrolledIntoView(blog)) {
        setValue(3);
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
          <Home setValue={setValue} />
          <About />
        </Container>
          <Projects projects={projects} />
          <Blog />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
