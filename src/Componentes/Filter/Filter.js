import './Filter.css';

export default function Filter ({valorFiltro,idFiltro,handlerChange}) {

    return(
        <div className="form-check form-switch bg-blue">
            <input className="form-check-input" type="checkbox"role="switch" id={idFiltro} onChange={handlerChange}/>
            <label className="form-check-label" htmlFor={idFiltro}>{valorFiltro}</label>
        </div>
    )
};
