// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Education from './components/educations';
import Projects from './components/project';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
    });

    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    const handleMenuToggle = () => {
      navLinks.classList.toggle('active');
    };

    mobileMenuToggle.addEventListener('click', handleMenuToggle);

    // Smooth scrolling & active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
          a.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      mobileMenuToggle.removeEventListener('click', handleMenuToggle);
      window.removeEventListener('scroll', handleScroll);
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };

  }, []); // Empty array ensures this effect runs only once

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;