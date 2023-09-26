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
      {nombre:"ChA",
      filtro:"Character Alive"
    }
    ,{nombre:"ChD",
      filtro:"Character Dead"
    } 
    ,{nombre:"F",
      filtro:"Female"
    }
    ,{nombre:"M",
      filtro:"Male"
    } 
    ,{nombre:"OrK",
      filtro:"Origin Unknown"
    }
  ])
    let traerPersonajes=async()=>{
      let dato= await fetch('https://rickandmortyapi.com/api/character')
      .then(resp=>resp.json())
      .catch(err=>console.log("Hubo un error" +err));
      return dato
    }
    
   let aplicarFiltros=()=>(event)=>{console.log("event.target.id") }




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
       <Fragment>
         <Navegacion className="btn" itemMenu={itemMenu}/>
         <section className= "row section-filters py-5">
        <h2><span>Filters</span></h2>
        <form className='d-flex gap-5 p-5'>
        {filtros.map((item)=>{ return<Filter key={item} valorFiltro={item.filtro} idFiltros={item.nombre} />})}
        {/**ACA QUEDE  00:45 DEL VIDEO DE 3:16MIN APLICAR FILTROS*/}
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