import './Personajes.css';
import Navegacion from '../../Componentes/Navegacion/Navegacion.js';
import Tarjetas from '../../Componentes/Paginas/Tarjetas';
import {useState, useEffect, Fragment} from 'react';
import Filter from '../../Componentes/Filter/Filter';
//import { Link } from 'react-router-dom';

export default function Character () { 
    //let [itemMenu]=useState("Characters"); //lista completa de los los personajes
    let [listaCompleta,setListaCompleta]=useState([]);// lista de personajes a reproducir en las tarjetas
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
  ]);
let [filtrosAplicados,setFiltrosAplicados]=useState([]);
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
    setFiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
    //console.log(personajes)
    } else {
    //console.log("Sacar filtros")

    let filtrosRestantes=filtrosAplicados.filter((el)=>el !==nombreCheckbox)
    setPersonajes(listaCompleta);
    setFiltrosAplicados(filtrosRestantes)  
  }

    //console.log(nombreCheckbox);
    //console.log(event.target.checked);
}


   useEffect(()=>{
    let guardarPersonajes=async()=>{
     let info =await traerPersonajes();
     let listaPersonajes=info.results;
     setPersonajes(listaPersonajes);
     setListaCompleta(listaPersonajes)
   }
    guardarPersonajes();
   },[])

   useEffect(()=> {
   filtrosAplicados.forEach((filtroNombre)=>{
  let resultado;
  if(filtroNombre === "Alive" || filtroNombre === "Dead"){
    resultado= personajes.filter((personaje)=>personaje.status === filtroNombre)
    }
    if (filtroNombre === "Female" || filtroNombre === "Male"){
    resultado= personajes.filter((personaje)=>personaje.gender === filtroNombre)
    }
    if (filtroNombre === "unknown"){
       resultado= personajes.filter((personaje)=>personaje.origin.name === filtroNombre)     
    }
    setPersonajes(resultado) 
})
  },[filtrosAplicados]);
  console.log(filtrosAplicados)

   //Con esta funcion useEffect, se ejecura cada vez que se renderiza la funcion. Le ndico cuando ejecutar la funcion.
    return (
       <Fragment>
         <Navegacion />
         <section className= "row section-filters py-5">
        <h2 className='filters-area d-flex m-2 align-items-start'>Filters</h2>
        <form className='d-flex gap-5 p-5'>
        {filtros.map((item)=>{ return<Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
        </form>
        </section>
         <section className='tarjeta d-flex'>
          {
            personajes.length>0?
            personajes.map((personajes)=>{
            return <Tarjetas key={personajes.name} data={personajes}/>
            }):
            <p className="alert alert-success" role="alert">Sorry! There are no Characters width all those properties</p>
        }     
          </section>
        </Fragment>
     )
 }