import * as React from 'react';
import logo from '../images/bothy-blend.png';

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container layout">
        <div className="hero-logo">
          <img src={logo} alt="Bothy Blend logo" />
        </div>

        <div className="hero-content">
          <h1>We Are Bothy Blend</h1>
          <h2>Mobile coffee with a concience!</h2>
          <div className="call-to-action">
            <button>Find Us</button>
            <button>Book Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};
