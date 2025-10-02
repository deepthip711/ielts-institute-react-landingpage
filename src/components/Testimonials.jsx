import React from 'react';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Students Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Student 1"/>
          <p>"This platform helped me achieve my dream band score!"</p>
          <h4>- Priya S.</h4>
        </div>
        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student 2"/>
          <p>"The AI feedback is so accurate and helpful."</p>
          <h4>- Rahul K.</h4>
        </div>
        <div className="testimonial-card">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student 3"/>
          <p>"Highly recommend for anyone preparing for IELTS."</p>
          <h4>- Ananya M.</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
