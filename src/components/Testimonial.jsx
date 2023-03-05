import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimomios</p>
        <h1 className="primary-heading">Que estan diciendo</h1>
        <p className="primary-text">
      
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
         Las dietas de Tyfood son super buenas, me gusta bastante porque puedo alimentarme bien y toman en cuenta mis necesidades caloricas y que alimentos son mis preferidos o los que no puedo comer. Lo mejor es que me entregan en mi trabajo
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Andrés Vega</h2>
      </div>
    </div>
  );
};

export default Testimonial;
