import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import pages from './pages';
import { projects } from './info';

function App(props) {
  const { Home, About, Projects, Blog, ContactMe } = pages;
  const [ value, setValue ] = useState(0);
  const homeEl = useRef(null);
  const aboutEl = useRef(null);
  const projectsEl = useRef(null);
  const blogEl = useRef(null);
  const contactMeEl = useRef(null);

  const isScrolledIntoView = (el) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop < window.innerHeight/2 && elemBottom >= 0;
    return isVisible;
  }

  const handleSectionScroll = (num, path) => {
    setValue(num);
    if (props.history.location.pathname !== path) {
      props.history.push(path)
    }
  }

  useEffect(() => {
    const listener = document.addEventListener("scroll", event => {
      if (isScrolledIntoView(blogEl.current) ) {
        handleSectionScroll(3, '/blog');
      } else if (isScrolledIntoView(projectsEl.current) ) {
        handleSectionScroll(2, '/projects');
      } else if (isScrolledIntoView(aboutEl.current) ) {
        handleSectionScroll(1, '/about');
      } else if (isScrolledIntoView(homeEl.current)) {
        handleSectionScroll(0, '/');
      }
      return () => {
        document.removeEventListener("scroll", listener)
      }
    })
  }, [])

  return (
    <div className="App">
      <div className="splash">
        <Header setValue={setValue} value={value} />
        <Home setValue={setValue} myRef={homeEl} />
      </div>
      <main>
        <Container className="main-div">
          <About myRef={aboutEl}/>
        </Container>
          <Projects projects={projects} myRef={projectsEl} />
          <Blog myRef={blogEl} />
          <ContactMe myRef={contactMeEl} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
