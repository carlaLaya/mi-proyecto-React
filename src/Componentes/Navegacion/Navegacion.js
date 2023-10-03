import './Navegacion.css';
import { Link } from 'react-router-dom';

export default function Navegacion () {
    return(
      <header className="bg-blue">
          <nav className="navbar navbar-expand-lg ">
              <div class="container-fluid">
            <Link to="/"className='titulo text-decoration-none px-5 py-2'> Ricky & Morty</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
                <div>
                  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className= 'navbar-nav me-auto mb-2 mb-lg-0'>
                      <Link to ="/Character" className='btn '>Characters</Link > 
                      <Link to="/Contacto" className='btn '>Contact</Link>
                    </ul>
                  </div>
                </div>
            </div>
          </nav>
    </header>
    )
};