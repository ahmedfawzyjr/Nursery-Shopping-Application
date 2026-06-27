import React, { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <div className="landing-left">
              <h1>Paradise Nursery</h1>
              <div className="landing-divider"></div>
              <p>
                Welcome to Paradise Nursery, your ultimate destination for fresh, vibrant, and healthy houseplants. 
                Whether you want to clean your air, invite soothing aromas into your home, or find natural insect repellers, 
                we curate our collection to help you cultivate the perfect home oasis.
              </p>
              <button className="btn-get-started" onClick={handleGetStartedClick}>
                Get Started
                <span className="btn-get-started-icon">→</span>
              </button>
            </div>
            
            <div className="landing-right">
              <div className="about-us-wrapper-card">
                <AboutUs />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductList setShowProductList={setShowProductList} />
      )}
    </div>
  );
}

export default App;
