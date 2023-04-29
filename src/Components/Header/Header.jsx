import React from "react";
import brandLogo from "/images/brand__logo.jpg";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <div className="brand__logo">
            <img src={brandLogo} alt="brand__imgae" />
          </div>
          <div className="brand__name">
            <BsAirplaneEnginesFill className="brand__icon" />
            <p>
              Trip<span>Eat</span>
            </p>
          </div>
          <h1>Home</h1>
          <div className="brand__details">
            <p>Affordable living with less maintenance🌿.</p>
          </div>
          <h1>Wishlist</h1>
        </nav>
      </header>
    </div>
  );
};

export default Header;
