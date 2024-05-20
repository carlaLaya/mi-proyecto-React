import { Fragment } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default function Home () {
    return(
     <Fragment> 
      <div className="container-header d-flex flex-column justify-content-center">
        <div className="bg-text">
          <h1 className= "row justify-content-center"> <span>Proyecto Rick & Morty</span></h1>
          <h3 className="text-center p-3">Bienvenidos a mi Proyecto!</h3>
          <p className='text-center p-2'>Rick y Morty es una serie animada que sigue las aventuras absurdas y cómicas de un científico loco y su nieto</p>
          <p className='text-center P-2'>En esta página, podrás conocer a todos los personajes de la serie</p>
          <p>Podrás buscar y filtrar por diferentes propiedades, según el personaje que más te guste.  </p>
          <h2 className='titulo2'>Vamos!</h2>
          <Link to ="/Character" className='btn'>Personajes</Link>
          <Link to="/Contacto" className='btn'>Contacto</Link>
        </div>
        {/*<Footer dato={nombre}/>*/}
        {/*<Boton tituloBoton={"Characters"}/> reutilizo y cambio elnombre del boton*/}
        {/*<Boton tituloBoton={"Contact"}/>reutilizo y cambio elnombre del boton*/}
      </div>
     </Fragment>
    )
}



