import './Personajes.css';
import Navegacion from '../Navegacion/Navegacion.js';
<<<<<<< HEAD
import Tarjetas from './Tarjetas';
=======
import { useState } from 'react';
import Card from '../Card/Card';
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be

export default function Personajes() {
    let [itemMenu,setItemMenu]=useState("Personajes")
    return(
<<<<<<< HEAD
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
=======
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
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be
    )
};

