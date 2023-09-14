//importo hojas de estilo
import './App.css';

//importo paquete
import React from 'react';
//importo carpeta de componentes
import Boton from './Componentes/Boton/Boton.js'
import Footer from './Componentes/Footer/Footer.js';
import Personajes from './Componentes/Personajes/personajes.js';
import Home from './Componentes/Paginas/home.js';
import Paginas from './Componentes//Personajes/personajes.js';

  function App() {
    return (
  <div> 
    <header>
      {/*<h1 className='texto'>Hola React</h1>*/}
      {/*<Boton tituloBoton={"chau"}/>*/}
      {/*<p>Ricky y Morty</p>*/}
      </header>
      <div class="container-header  d-flex flex-column justify-content-center">
      <div className="bg-text">
      <h2 className="row justify-content-center">Proyect Rick & Morty</h2>
      <h4 className="text-center p-3">Helcome to Rick & Morty Proyect!</h4>
      <p className='text-center p-2'>This proyect was made for practising React and to made a functional website/</p>
      <p className='text-center'>In this website you can know information of the characters of this animated series</p>.
      <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
      <h2>Lets go!</h2>
      <button>Characters</button>
      <button>Contact</button>
      </div>
      {/*<Footer dato={nombre}/>*/}
      {/*<Boton tituloBoton={"Characters"}/> reutilizo y cambio elnombre del boton*/}
       {/* <Boton tituloBoton={"Contact"}/>reutilizo y cambio elnombre del boton*/}
      </div>
  </div>
  );
} 
export default App;
