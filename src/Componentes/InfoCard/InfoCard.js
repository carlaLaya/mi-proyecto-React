import { Fragment } from 'react';
import './InfoCard.css';


export default function InfoCard ({status,especie,origen,genero,setShow}) {
    return (
        <Fragment>
    <button className=' m-3' onClick={()=>setShow(false)}>
                <i className="bi bi-x-lg"></i>{/* icono extraido de boostrap icon */}
            </button>            
            <section className='flex-container'>
                <ul className="list-group">
                <li className="list-group-item">
                    <p>Character Status :</p>
                    <p className='fs-5'>{status}</p>
                </li>
                <li className="list-group-item">
                <p>Specie:</p>
                <p className='fs-5'>{especie}</p></li>
                <li className="list-group-item">
                <p>Origin:</p>
                <p className='fs-5'>{origen}</p></li>
                <li className="list-group-item">
                <p>Gender</p>
                <p className='fs-5'>{genero}</p></li>
            </ul>
            </section>
        </Fragment>
    )
};
