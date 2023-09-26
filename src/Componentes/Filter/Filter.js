import './Filter.css';

export default function Filter ({valorFiltro,idFiltro}) {

    return(
        <div className="form-check form-switch bg-blue">
        <input className="form-check-input" type="checkbox"role="switch" id={idFiltro} onChange={(event)=>console.log("event.target.id")}/>
        <label className="form-check-label" htmlFor={idFiltro}>{valorFiltro}</label>
        </div>

    )
};