import './Personajes.css';
import Navegacion from '../../Componentes/Navegacion/Navegacion.js';
import Tarjetas from '../../Componentes/Paginas/Tarjetas';
import {useState, useEffect, Fragment} from 'react';
import Filter from '../../Componentes/Filter/Filter';
//import { Link } from 'react-router-dom';

export default function Character () { 
   let [itemMenu]=useState("Characters");
    let[personajes,setPersonajes]=useState([]);
    let [filtros]=useState([
    {nombre:"Alive",
      filtro:"Character Alive"
    }
    ,{nombre:"Dead",
      filtro:"Character Dead"
    } 
    ,{nombre:"Female",
      filtro:"Female"
    }
    ,{nombre:"Male",
      filtro:"Male"
    } 
    ,{nombre:"unknown",
      filtro:"Origin unknown"
    }
  ])
    let traerPersonajes=async()=>{
      let dato= await fetch('https://rickandmortyapi.com/api/character')
      .then(resp=>resp.json())
      .catch(err=>console.log("Hubo un error" +err));
      return dato
    } 
   
    let aplicarFiltros=(event)=>{
    let nombreCheckbox=event.target.id;

    if (event.target.checked === true) {
    console.log("Aplicar filtros")
    console.log(personajes)
    if(nombreCheckbox === "Alive" || nombreCheckbox === "Dead"){
    let resultado= personajes.filter((personaje)=>personaje.status === nombreCheckbox)
      setPersonajes(resultado) 
    }
    if (nombreCheckbox === "Female" || nombreCheckbox === "Male"){
      let resultado= personajes.filter((personaje)=>personaje.gender === nombreCheckbox)
      setPersonajes(resultado) 
    }
    if (nombreCheckbox === "unknown"){
      let resultado= personajes.filter((personaje)=>personaje.origin.name === nombreCheckbox)
      setPersonajes(resultado) 
    }
    } else {
    console.log("Sacar filtros")
  }
    //console.log(nombreCheckbox);
    //console.log(event.target.checked);
}



   useEffect(()=>{
    let guardarPersonajes=async()=>{
     let info =await traerPersonajes();
     let listaPersonajes=info.results;
     setPersonajes(listaPersonajes)
   }
    guardarPersonajes();
   },[])
   //Con esta funcion useEffect, se ejecura cada vez que se renderiza la funcion. Le ndico cuando ejecutar la funcion.
    return (
       <Fragment>
         <Navegacion className="btn" itemMenu={itemMenu}/>
         <section className= "row section-filters py-5">
        <h2><span>Filters</span></h2>
        <form className='d-flex gap-5 p-5'>
        {filtros.map((item)=>{ return<Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
        </form>
        </section>
         <section className='personajes'>
         {personajes.map((personajes)=>{
            return <Tarjetas key={personajes.name} data=
            {personajes} />
            })};
          </section>
        </Fragment>
     )
 };