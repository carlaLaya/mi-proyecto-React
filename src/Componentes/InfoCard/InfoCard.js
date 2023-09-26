import { Fragment } from 'react';
import './InfoCard.css';


export default function InfoCard ({status,especie,origen,genero,setShow}) {
    return (
        <Fragment>
             <button className="btn btn-active d-flex align-self-end m-2 btn-x-md" onClick={()=>setShow(false)}>X</button>
            <section>
            <div className='d-flex p-2 flex-row align-items-center'>
            <ul class="list-group">
                <li className="list-group-item">
                    <h6 className="fw-bold">Character Status :</h6>
                    <p>{status}</p>
                    </li>
                <li className="list-group-item">
                    <h6 className="fw-bold">Specie :</h6>
                    <p>{especie}</p>
                    </li>
                <li className="list-group-item">
                    <h6 className="fw-bold">Origin :</h6>
                    <p>{origen}</p>
                    </li>
                 <li className="list-group-item">
                    <h6 className="fw-bold">Gender</h6>
                    <p>{genero}</p>
                    </li>
            </ul>
            </div>
            </section>
        </Fragment>
    )
};
