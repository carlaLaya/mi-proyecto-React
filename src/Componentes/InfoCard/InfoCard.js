import { Fragment } from 'react';
import './InfoCard.css';


export default function InfoCard ({status,especie,origen,genero,setShow}) {
    return (
        <Fragment>
            <button className="btn" onClick={()=>setShow(false)}>X</button>
            <section className='flex-container'>
                <ul className='btn-primary '>
                    <li className="p-2">
                        <h5 className='fw-bold'>Character Status :</h5>
                        <p>{status}</p>
                        </li>
                    <li className="p-2">
                    <h5 className='fw-bold'>Specie :</h5>
                        <p>{especie}</p>
                        </li>
                    <li className="p-2 ">
                        <h5 className='fw-bold' >Origin :</h5>
                        <p>{origen}</p>
                        </li>
                    <li className="p-2 ">
                        <h5 className='fw-bold'>Gender</h5>
                        <p>{genero}</p>
                        </li>
                </ul>
            </section>
        </Fragment>
    )
};
