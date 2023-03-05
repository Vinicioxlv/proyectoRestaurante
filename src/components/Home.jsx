import React from "react";
import BannerBackground from "../Assets/home-banner-ba2.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Bienvenido a Tyfood alimentacion saludable a domicilio
          </h1>
          <p className="primary-text">
          Nos enfocamos en preparar platillos saludables y deliciosos para que puedas cuidarte sin sacrificar el sabor. 
          </p>
          <Link to ='/Inicio'>
            <button className="secondary-button"> 
              Ordena Ahora <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
