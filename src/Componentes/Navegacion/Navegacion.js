import './Navegacion.css';
import { Link } from 'react-router-dom';

export default function Navegacion () {
    return(
      <header className="bg-blue">
          <div className="container-fluid justify-content-between align-items-end">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
              <Link to="/" className='titulo text-decoration-none'> Ricky & Morty</Link>
            <div className='botons'>
          <ul className= 'navbar-nav'>
          <Link to ="/Character" className='btn'>Characters</Link>
          <Link to="/Contacto" className='btn'>Contact</Link>
          </ul>
          </div>
          </nav>
          </div>
    </header>
    )
};