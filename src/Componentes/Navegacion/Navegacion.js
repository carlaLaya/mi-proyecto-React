import './Navegacion.css';

export default function Navegacion ({}) {
    return(
      <header className="bg-blue">
            <h3 className='titulo'>Ricky & Morty</h3>
          <div className="container-fluid justify-content-between align-items-end">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
          <ul className= ' navbar-nav nav-pills p-4'>
            <button className='btn'>Characters</button>
            <button className='btn'>Contact</button>
          </ul>
          </nav>
          </div>
    </header>
    )
}