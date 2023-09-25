import './Tarjetas.css';

import InfoCard from '../InfoCard/InfoCard';
import { useState } from 'react';


export default function Tarjetas ({data}) {
    const [show,setShow]= useState(false);
    //const[hide,setHide]=useState("d-block");

   const mostrarLista=()=>{
    setShow(true);
    //setHide('d-none')
   }
    return(
        <div>
            <div className='Tarjetas .bg-secondary p-2 d-flex flex-column justify-content-between align-items-center'>
            <img src={data.image} alt='imagen-personaje'/>
            <h4>{data.name}</h4>
           <button className={show?"d-none":"d-block" } onClick={mostrarLista} >Nnow More</button>
           {show===true?<InfoCard status={data.status} genero={data.gender} origen={data.origin.name} especie={data.species} setShow={setShow}/>:''}
            </div>
        </div>
    )
};

