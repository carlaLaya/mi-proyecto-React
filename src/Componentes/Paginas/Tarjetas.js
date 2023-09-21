
import './Tarjetas.css';

export default function Tarjetas ({nombrePersona, cambiarNombre}) {
   
    return(
        <div>
            <div className='Tarjetas'>
            <p>{cambiarNombre}</p>
            <h4>{nombrePersona}</h4>
           <button className='btn'>Nnow More..</button>
           </div>
        </div>
    )
};

