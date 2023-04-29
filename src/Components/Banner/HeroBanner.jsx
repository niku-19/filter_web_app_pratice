import React from "react";
import heroBanner from "/images/hero_image-removebg.png";
import "./Hero.css";

const HeroBanner = () => {
  return (
    <div className="container">
      <div className="banner__grid">
        <div className="banner__details">
          <h1>Plan || Travel || Eat || Repeat</h1>
          <h2>
            Looking for a Place ? <br /> We got some!
          </h2>
          <p>
            Rent a beautiful house for your family, friends or just yourself.
            Choose from flats in societies, individual apartments, bungalows and
            villas.
          </p>
          <button className="contact__button">Contact</button>
        </div>
        <div className="hero__banner">
          <img src={heroBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
