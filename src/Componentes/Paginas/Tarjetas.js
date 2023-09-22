
import './Tarjetas.css';

export default function Tarjetas ({nombre,imagen}) {
   
    return(
        <div>
            <div className='Tarjetas'>
            <img src={imagen} alt='imagen-personaje'/>
            <h4>{nombre}</h4>
           <button className='btn1'>Nnow More..</button>
           </div>
        </div>
    )
};

