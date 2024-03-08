import React from "react";
import "./Hero.scss";

function handleClick() {
  alert("Registered");
}

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="container">
          <img className="abs1" src="/images/hero11.svg" alt="hero 1" />
          <div className="content">
            <h1>Find the right partners to fuel your business growth</h1>
            <h2>
              Join a vibrant community of MSPs to forge long-lasting
              relationships with partners that help you create excellent
              customer experiences
            </h2>
            <a href="a" className="btn" onClick={handleClick}>
              Register today
            </a>
          </div>
          <img className="abs2" src="/images/hero12.svg" alt="hero 2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
