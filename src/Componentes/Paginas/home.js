import './Home.css';
import Navegacion from '../Navegacion/Navegacion.js';
import {useState} from 'react';

/*import React from 'react'
export const Home = () => {
  return (
    <div>Home</div>
  )
 forma de importar componntes que tomamos de la extension ES7 pegando"RAFC" me crea la funcion flecha. En el app.js se importando adentro de llaves.  
}*/ 

<<<<<<< HEAD
let nombre = "Carla"; //para definir varibles las llamo con corchetes {}
export default function Home ({personajes, tarjeta}) {
  console.log(personajes);
  console.log(tarjeta);
=======
export default function Home () {
  const [nombre,setNombre]=useState ("Carla");
  const cambiarNombre=() => {
    console.log("Cambia boton a Pedro");
    setNombre("Pedro");
  }
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be
    return(
      <>
       <Navegacion />
       <h2> {personajes} </h2> 
       <h3> {tarjeta} </h3> 
       <p>{5*5}</p>
      <h1>Soy el Home</h1>
<<<<<<< HEAD
      </>
      
=======
      {/*En react pongo una letra en mayusulas*/}
      <button onClick={cambiarNombre}>Click</button>
      <p>{nombre}</p>
      </div>
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be
    )
}
/* STATES son variables que puedo cambiar*/



