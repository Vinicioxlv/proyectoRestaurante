import React from 'react'

//import Asiatica from "../imagenes/dieta-asiatica.png"
//import {createRequire} from "module";


function Dietas(props){
  const imagePath = `./imagenes/testimonio-${props.imagen}.png`
  //src={require(`../imagenes/dieta-${props.imagen}.png`)}
  return(
    <div className="work-section-wrapper">
    <div className='contenedor-dietas'>
      <img
        className='imagen-dietas'
        src={props.imagen}
        alt='foto de emma'/>
      <div className='contenedor-texto-dietas'>
      <p className='nombre-dietas'>{props.nombre} </p>
      <p className='nombre-dietas'>{props.calorias} Calorias</p>
      <p className='texto-dietas'>Ingredientes: {props.ingredientes}</p>
      </div>
    </div>
    </div>
  )
}

export default Dietas;