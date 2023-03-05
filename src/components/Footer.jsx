import React from "react";
import logo2 from "../assets/logo2.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={logo2} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Dietas</span>
          <span>Alimentacion saludable</span>
          <span>como trabajamos</span>
          <span>Testimonios</span>
          <span>Contactanos</span>
          <span>Empleos</span>
        </div>
        <div className="footer-section-columns">
          <span>0986426729</span>
          <span>info@tyfood.com</span>
          <span>ventas@tyfood.com</span>
          <span>nutri@tyfood.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminios y condiciones</span>
          <span>©Tyfoof proyecto demo UCAMP</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
