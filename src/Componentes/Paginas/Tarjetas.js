
import './Tarjetas.css';

export default function Tarjetas ({nombrePersona, cambiarPersonaje}) {
   
    return(
        <div>
            <div className='Tarjetas'>
            <p>{cambiarPersonaje}</p>
            <h4>{nombrePersona}</h4>
           <button className='btn'>Nnow More..</button>
           </div>
        </div>
    )
};

