import './Personajes.css';
import Navegacion from '../Navegacion/Navegacion.js';
import Tarjetas from './Componentes/Paginas/Tarjetas.js';
//import { useState } from 'react';


export default function Personajes() {
    //let [itemMenu,setItemMenu]=useState("Personajes")
    return(
        <div>
            <Navegacion />
            <h2>Filtros</h2>
            <div className='grid-container'>
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
            </div>
        </div>
    )
};

