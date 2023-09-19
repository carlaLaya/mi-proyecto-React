
import './Tarjetas.css';

export default function Tarjetas ({dato}) {
    console.log(dato)
    return(
        <div>
            <div className='Tarjetas'>
            <p>Aca va la imagen</p>
            <h4>{dato}</h4>
           <button className='btn'>Nnow More..</button>
           </div>
        </div>
    )
};

