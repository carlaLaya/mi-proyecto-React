import './Navegacion.css';



export default function Navegacion () {
    return (
      <header className="bg-blue">
            <h3 className='titulo'>Ricky & Morty</h3>
          <div className="container-fluid justify-content-between align-items-end">
              <h4 className='titulo'>Ricky & Morty</h4>
            <div className='botons'>
          <ul className= 'navbar-nav'>
            <button className='btn'>Characters</button>
            <button className='btn'>Contact</button>
          </ul>
          </div>
        </div>
    </header>
    )
};