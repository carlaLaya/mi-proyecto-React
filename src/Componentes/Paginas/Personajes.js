import './Personajes.css';
import Navegacion from '../Navegacion/Navegacion.js';
import Tarjetas from './Tarjetas.js';
//import { useState } from 'react';


export default function Personajes() { 
    let nombre=["Ricky Sanchez", "Morty Smith", "Summer Smith", "Beth Smith"];
    //let [itemMenu,setItemMenu]=useState("Personajes")
    return(
        <div>
            <Navegacion />
            <h2>Filtros</h2>
            <div className='grid-container'>
                {/*Agrego props a los componetens*/}
            <Tarjetas dato={nombre[0]}/>
            <Tarjetas dato={nombre[1]}/>
            <Tarjetas dato={nombre[2]}/>
            <Tarjetas dato={nombre[3]}/>
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