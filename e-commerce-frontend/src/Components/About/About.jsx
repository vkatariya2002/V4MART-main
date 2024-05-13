import React from "react";
import Story from "../Assets/story.png";
import Vision from "../Assets/vision.png";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row mt-4 align-items-center">
        <div className="col">
          <img style={{ width: "75%" }} src={Vision} alt="vision" />
        </div>
        <div className="col">
          <h2>Our Story</h2>
          <p>
            V4Mart was founded with a simple mission: to provide customers with
            an unparalleled online shopping experience, offering a wide range of
            high-quality products coupled with exceptional customer service.
          </p>
        </div>
      </div>
      <div className="row mt-4 align-items-center">
        <div className="col">
          <h2>Our Journey</h2>
          <p>
            Our journey began in 2024, when our founder, Vipul Jain, envisioned
            a platform where customers could find everything they need in one
            place, without compromising on quality or convenience.
          </p>
          <p>
            Since then, V4Mart has grown from a small startup to a thriving
            e-commerce destination, serving customers around the globe.
          </p>
        </div>
        <div className="col">
          <img src={Story} alt="vision" />
        </div>
      </div>
    </div>
  );
};

export default About;
