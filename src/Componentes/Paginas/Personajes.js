import './Personajes.css';
import Navegacion from '../Navegacion/Navegacion.js';
import Tarjetas from './Tarjetas.js';
//import { useState } from 'react';


export default function Personajes() { 
    const personaje=["Ricky Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Pichila", "Malena", "Felipe", "Santiago"];
    //let [itemMenu,setItemMenu]=useState("Personajes")
    //const [nombre,setNombre]=useState("Carla");
    //creamos la funcion del estado
  //const cambiarNombre=() =>{
        //setNombre("Rosa");
    //}
    return (
       <>
         <Navegacion />
         <h2>Filtros</h2>
         {/*<h2>{cambiarNombre}</h2>
            <Tarjetas nombrePersona={nombre} cambiarNombre={setNombre}/>
            <button onClick={cambiarNombre}>Click</button>
            <div/>
    <Tarjetas nombrePersona={personaje[0]}/>*/}
            <div className='grid-container'>
            {personaje.map((personaje)=>{
            return <Tarjetas nombrePersona={personaje}/>
            })};
            </div>
        </>
     )
 };