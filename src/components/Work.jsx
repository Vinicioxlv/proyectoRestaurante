import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Evaluacion",
      text: "Realizamos una evaluacion de tus requerimientos nutricionales y preferencias",
    },
    {
      image: ChooseMeals,
      title: "Seleccion",
      text: "Seleciona el menu que mas guste hastas las 10 de la mañana",
    },
    {
      image: DeliveryMeals,
      title: "Entregas Raápidas",
      text: "Indicanos el lugar de entrega y recibiras tu pedido hasta las 13:00",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trabajo</p>
        <h1 className="primary-heading">Como trabajamos</h1>
        <p className="primary-text">
          Preparamos menús saludables basados en tus requerimientos alimenticios, nivel de actividad fisica y preferencias.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
