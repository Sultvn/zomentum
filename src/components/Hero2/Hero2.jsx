import React from "react";
import "./Hero2.scss";

const Hero2 = () => {
  return (
    <div className="hero2">
      <img className="frame frame1 " src="/images/Frame.svg" alt="" />
      <h1>List. Sell. Grow</h1>
      <ul className="content">
        <li className="card">
          <img src="/images/hero21.svg" alt="" />
          <p>Be a part of the only All-In-One platform for IT services </p>
        </li>
        <li className="card">
          <img src="/images/hero22.svg" alt="" />
          <p>Come closer to finding your next customer</p>
        </li>
        <li className="card card3">
          <img src="/images/hero23.svg" alt="" />
          <p>Grow your business with a single click</p>
        </li>
      </ul>
      <img className="frame frame2" src="/images/Frame.svg" alt="" />
    </div>
  );
};

export default Hero2;
