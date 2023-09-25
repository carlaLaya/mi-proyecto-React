export default function InfoCard ({status,especie,origen,genero,setShow}) {
    return (
        <div>
            <button onClick={()=>setShow(false)}>X</button>
            <ul class="list-group">
                <li className="list-group-item">
                    <h5>Character Status :</h5>
                    <p>{status}</p>
                    </li>
                <li className="list-group-item">
                    <h5>Specie :</h5>
                    <p>{especie}</p>
                    </li>
                <li className="list-group-item">
                    <h5>Origin :</h5>
                    <p>{origen}</p>
                    </li>
                 <li className="list-group-item">
                    <h5>Gender</h5>
                    <p>{genero}</p>
                    </li>
            </ul>
        </div>
    )
};
