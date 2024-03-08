import React from "react";
import { FaArrowRight } from "react-icons/fa";

import "./Hero3.scss";

const Hero3 = () => {
  return (
    <section>
      <div className="container">
        <div class="hero3">
          <div class="card-text" id="second">
            <h1>Your channel program on steroids</h1>
            <p>
              Tired of finding MSPs that can help you boost your channel sales?
              You’re in luck, because they’re all here.
            </p>
            <a href="a" className="link">
              Signup now
              <FaArrowRight />
            </a>
          </div>
          <div class="card-img" id="first">
            <img src="/images/hero31.svg" alt="" />
          </div>

          <div class="card-img" id="third">
            <img src="/images/hero32.svg" alt="" />
          </div>
          <div class="card-text" id="fourth">
            <h1>Become the vendor everyone wants to buy from</h1>
            <p>
              Gain brand authority and visibility with the help of the largest
              IT service ecosystem. Find customers who are looking for your
              solution right now!
            </p>
            <a href="a" className="link">
              Signup now
              <FaArrowRight />
            </a>
          </div>

          <div class="card-text" id="sixth">
            <h1>It’s like having Your best Salesman on autopilot</h1>
            <p>
              Share collaterals and documents that are automatically branded.
              Leverage a rich partner network that sells your solution exactly
              the way your best salesman would.
            </p>
            <a href="a" className="link">
              Signup now
              <FaArrowRight />
            </a>
          </div>
          <div class="card-img" id="fifth">
            <img src="/images/hero33.svg" alt="" />
          </div>
          <div class="card-img" id="eighth">
            <img src="/images/hero34.svg" alt="" />
          </div>
          <div class="card-text" id="seventh">
            <h1>Track your channel performance</h1>
            <p>
              Monitor the health and revenue of your channel program and
              streamline your campaign to win more customers within Zomentum.
            </p>
            <a href="a" className="link">
              Signup now
              <FaArrowRight />
            </a>
          </div>

          <div class="card-text" id="nineth">
            <h1>Get The best version of Your sales playbook</h1>
            <p>
              Gather insights about top channel sellers and find out what pitch
              and collaterals ensure maximum profitability. Win happy customers
              with an optimized sales playbook.
            </p>
            <a href="a" className="link">
              Signup now
              <FaArrowRight />
            </a>
          </div>
          <div class="card-img" id="tenth">
            <img src="/images/hero35.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
