import './Personajes.css';
import Navegacion from '../Navegacion/Navegacion.js';
import { useState } from 'react';
import Card from '../Card/Card';

export default function Personajes() {
    let [itemMenu,setItemMenu]=useState("Personajes")
    return(
        <>
            <Navegacion itemMenu={itemMenu}/>
            <h2>Filters</h2>
            <p>aca irian los filtros</p>
            <section className='grid-container' >
                 <Card />
                 <Card />
                 <Card />
                 <Card />
                 <Card />
                 <Card />
                 <Card />
                 <Card />
                 <Card />
            </section>
        </>
    )
};

