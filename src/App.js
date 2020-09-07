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
    const visible = el.current.offsetTop < window.scrollY + window.innerHeight/2;
    return visible;
  }

  useEffect(() => {
    const handleSectionScroll = (num, path) => {
      setValue(num);
      if (props.history.location.pathname !== path) {
        props.history.push(path)
      }
    }
    const listener = document.addEventListener("scroll", event => {
      if (isScrolledIntoView(blogEl) ) {
        handleSectionScroll(3, '/blog');
      } else if (isScrolledIntoView(projectsEl)) {
        handleSectionScroll(2, '/projects');
      } else if (isScrolledIntoView(aboutEl)) {
        handleSectionScroll(1, '/about');
      } else if (isScrolledIntoView(homeEl)) {
        handleSectionScroll(0, '/');
      }
      return () => {
        document.removeEventListener("scroll", listener)
      }
    })
  }, [props.history])

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
