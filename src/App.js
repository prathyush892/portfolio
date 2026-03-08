import React from 'react';
import './styles/global.css';

import Cursor     from './components/Cursor';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Marquee    from './components/Marquee';
import About      from './components/About';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
