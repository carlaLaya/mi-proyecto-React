import './Home.css';
import Navegacion from '../Navegacion/Navegacion.js';
import {useState} from 'react';


export default function Home () {
  const [nombre,setNombre]=useState ("Carla");
  const cambiarNombre=() => {
    console.log("Cambia boton a Pedro");
    setNombre("Pedro");
  }
    return(
      <div>
       <Navegacion/>
      <h1>Soy el Home</h1>
      {/*En react pongo una letra en mayusulas*/}
      <button onClick={cambiarNombre}>Click</button>
      <p>{nombre}</p>
      </div>
    )
}
/* STATES son variables que puedo cambiar*/



