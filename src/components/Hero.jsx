import React from 'react';
import heroImg from '../images/hero.jpg';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-text">
        <h1>Master IELTS with Expert Guidance</h1>
        <p>Prepare, practice, and achieve your target band score with our AI-powered platform</p>
        <button>Get Started</button>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Hero Banner" />
      </div>
    </section>
  );
}

export default Hero;
