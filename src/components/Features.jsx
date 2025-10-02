import React from 'react';
import speakingImg from '../images/speaking.png';
import mockTestImg from '../images/mock-test.png';
import aiScoreImg from '../images/ai-score.png';
import coursesImg from '../images/courses.png';


function Features() {
  return (
    <section id="features" className="features-section">
      <h2>Our Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <img src={speakingImg} alt="Speaking Practice"/>
          <h3>Speaking Practice</h3>
        </div>
        <div className="feature-card">
          <img src={mockTestImg} alt="Mock Tests"/>
          <h3>Mock Tests</h3>
        </div>
        <div className="feature-card">
          <img src={aiScoreImg} alt="AI Band Score"/>
          <h3>AI Band Score</h3>
        </div>
        <div className="feature-card">
          <img src={coursesImg} alt="Courses"/>
          <h3>Structured Courses</h3>
        </div>
      </div>
    </section>
  );
}

export default Features;
