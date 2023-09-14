import './Navegacion.css';

export default function Navegacion () {
    return(
      <header className="bg-blue">
          <div className="container-fluid justify-content-between align-items-end">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
            <h4>Ricky & Morty</h4>
            <div className='header-right'>
          <ul className= 'navbar-nav'>
            <button className='btn'>Characters</button>
            <button className='btn'>Contact</button>
          </ul>
          </div>
          </nav>
          </div>
    </header>
    )
}