import React from "react";
import "./Hero.css";
import introVideo from "./../../assets/video/intro.mp4";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container hero-container">
        <div className="hero-heading-container">
          <p className="hero-header">East West University CSE Fest 2024</p>
          <p className="hero-des">
            &#8220; Join us for the East West University CSE Fest 2024, where
            innovation meets celebration! Explore cutting-edge technology,
            engage in thrilling competitions, and celebrate the spirit of
            computer science excellence &#8221;
          </p>
        </div>
        <video src={introVideo} controls className="hero-video"></video>
      </div>
    </div>
  );
};

export default Hero;
