import './Home.css';
import { Link } from 'react-router-dom';

export default function Home () {
    return(
     <> 
      <div class="container-header  d-flex flex-column justify-content-center">
      <div className="bg-text">
      <h1 className= "row justify-content-center"> <span>Proyect Rick & Morty</span></h1>
      <h2 className="text-center p-3">Helcome to Rick & Morty Proyect!</h2>
      <p className='text-center p-2'>This proyect was made for practising React and to made a functional website</p>
      <p className='text-center P-2'>In this website you can know information of the characters of this animated series</p>
      <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
      <h2 className='titulo2'>Lets go!</h2>
      <Link to ="/Character" className='btn'>Characters</Link>
      <Link to="/Contacto" className='btn'>Contact</Link>
      </div>
        {/*<Footer dato={nombre}/>*/}
        {/*<Boton tituloBoton={"Characters"}/> reutilizo y cambio elnombre del boton*/}
        {/*<Boton tituloBoton={"Contact"}/>reutilizo y cambio elnombre del boton*/}
      </div>
     </>
    )
}



