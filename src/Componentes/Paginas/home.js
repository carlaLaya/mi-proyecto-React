import './Home.css';
import Navegacion from '../Navegacion/Navegacion.js';

/*import React from 'react'
export const Home = () => {
  return (
    <div>Home</div>
  )
 forma de importar componntes que tomamos de la extension ES7 pegando"RAFC" me crea la funcion flecha. En el app.js se importando adentro de llaves.  
}*/ 

let nombre = "Carla"; //para definir varibles las llamo con corchetes {}
export default function Home ({personajes, tarjeta}) {
  console.log(personajes);
  console.log(tarjeta);
    return(
      <>
       <Navegacion />
       <h2> {personajes} </h2> 
       <h3> {tarjeta} </h3> 
       <p>{5*5}</p>
      <h1>Soy el Home</h1>
      </>
      
    )
}



