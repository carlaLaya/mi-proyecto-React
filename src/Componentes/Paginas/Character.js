import './Personajes.css';
import Navegacion from '../Navegacion/Navegacion.js';
import Tarjetas from './Tarjetas.js';
import {useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';


export default function Character () { 
   let [itemMenu]=useState("Characters");
    let[personajes,setPersonajes]=useState([]);

    let traerPersonajes=async()=>{
      let dato= await fetch('https://rickandmortyapi.com/api/character')
      .then(resp=>resp.json())
      .catch(err=>console.log("Hubo un error" +err));
      return dato
    }
   
   useEffect(()=>{
    let guardarPersonajes=async()=>{
     let info =await traerPersonajes();
     console.log(info);
     let listaPersonajes=info.results;
     setPersonajes(listaPersonajes)
   }
    guardarPersonajes()
   },[])
   //Con esta funcion useEffect, se ejecura cada vez que se renderiza la funcion. Le ndico cuando ejecutar la funcion.

    return (
       <>
         <Navegacion className="btn" itemMenu={itemMenu}/>
         <h2>Filtros</h2>
         <section className=' grid-container'>
         {personajes.map((personajes)=>{
            return <Tarjetas key={personajes.name} data={personajes} />
            })};
          </section>
        </>
     )
 };