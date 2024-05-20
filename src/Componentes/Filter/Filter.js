import './Filter.css';

export default function Filter ({valorFiltro,idFiltro,handlerChange}) {

    return(
        <div className="form-check form-switch text-white">
            <input className="form-check-input" type="checkbox"role="switch" id={idFiltro} onChange={handlerChange}/>
            <label className="form-check-label fs-5" htmlFor={idFiltro}>{valorFiltro}</label>
        </div>
    )
};
