import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Paradise Nursery</h2>
      <p className="about-us-tagline">Where Greenery Meets Peace & Harmony</p>
      
      <div className="about-us-content">
        <p>
          At Paradise Nursery, we believe that bringing nature indoors has the power to transform spaces and elevate lives. 
          Our curated collection of houseplants is grown with love, selected for their resilience, health benefits, and 
          unparalleled natural beauty. Whether you are looking to purify your home's air, bring a touch of the wilderness to your 
          office desk, or create a soothing aromatic sanctuary, we have the perfect plant companion waiting for you.
        </p>
        
        <p>
          Our team of dedicated botanists and plant lovers works tirelessly to source the healthiest species and package them 
          with care. We provide step-by-step guidance, making green parenting accessible and delightful for everyone, from 
          complete beginners to seasoned horticulturists. Join us in making the world a greener, fresher, and happier place, one leaf at a time.
        </p>
      </div>

      <div className="about-us-values">
        <div className="value-card">
          <div className="value-icon">🌱</div>
          <h3>Premium Quality</h3>
          <p>Hand-picked, healthy plants grown under optimal conditions.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🍃</div>
          <h3>Expert Guidance</h3>
          <p>Comprehensive care tips and dedicated support for every customer.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🌿</div>
          <h3>Eco-Friendly</h3>
          <p>Sustainable sourcing and plastic-conscious packaging processes.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
