import './Navegacion.css';

<<<<<<< HEAD
export default function Navegacion ({}) {
=======
export default function Navegacion ({itemMenu}) {
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be
    return(
      <header className="bg-blue">
            <h3 className='titulo'>Ricky & Morty</h3>
          <div className="container-fluid justify-content-between align-items-end">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
<<<<<<< HEAD
          <ul className= ' navbar-nav nav-pills p-4'>
=======
              <h4 className='titulo'>Ricky & Morty</h4>
            <div className='botons'>
          <ul className= 'navbar-nav'>
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be
            <button className='btn'>Characters</button>
            <button className='btn'>Contact</button>
          </ul>
          </nav>
          </div>
    </header>
    )
}