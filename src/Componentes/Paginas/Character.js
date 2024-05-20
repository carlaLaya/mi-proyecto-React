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
    } else {
    let filtrosRestantes=filtrosAplicados.filter((el)=>el !==nombreCheckbox)
    setPersonajes(listaCompleta);
    setFiltrosAplicados(filtrosRestantes)  
  }
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
   //Con esta funcion useEffect, se ejecura cada vez que se renderiza la funcion. Le ndico cuando ejecutar la funcion.
    return (
       <Fragment>
         <Navegacion />
          <main className='container-fluid'>
              <section className= "row section-filters py-5">
                  <div className='filters-area d-flex m-2 align-items-center px-5 py-2'>
                    <h2 >Filters</h2>
                    <a class="btn btn-filters" data-bs-toggle="collapse" href="#collapseFilters" role="button" aria-expanded="false" aria-controls="collapseFilters">
                    <i class="bi bi-sliders"></i>
                    </a>
                  </div>
                <div className=' collapse filters justify-content-center flex-wrap' id= "collapseFilters">
                    <form >
                      {filtros.map((item)=>{ return<Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
                    </form>
                </div>
              </section>
              <section className='row cards-section'>
                  {
                    personajes.length>0?
                    personajes.map((personajes)=>{
                    return <Tarjetas key={personajes.name} data={personajes}/>
                    }):
                    <p className="alert alert-success" role="alert">Sorry! There are no Characters width all those properties</p>
                  }     
              </section>
            </main>
        </Fragment>
     )
 }