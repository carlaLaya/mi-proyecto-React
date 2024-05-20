import './Filter.css';

export default function Filter ({valorFiltro,idFiltro,handlerChange}) {

    return(
        <div className="filtros form-check form-switch px-5 py-2">
            <input className="form-check-input" type="checkbox"role="switch" id={idFiltro} onChange={handlerChange}/>
            <label className="form-check-label" htmlFor={idFiltro}>{valorFiltro}</label>
        </div>
    )
};
