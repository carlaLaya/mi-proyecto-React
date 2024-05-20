
//importo hojas de estilo
// importo un paquete de react, funcion que nos provee reacrt para manipular el estado a lo largo del tiempo

//importo paquete
import React from 'react';
//importo carpeta de componentes
//import Boton from './Componentes/Boton/Boton.js'
//import Personajes from './Componentes/Paginas/Personajes.js';
//import Paginas from './Componentes/Paginas/Home.js';
//import Navegacion from './Componentes/Navegacion/Navegacion.js';
//import Contacto from './Componentes/Contacto/Contacto.js';
//import Tarjetas from './Componentes/Paginas/Tarjetas.js';
//import Home from './Componentes/Paginas/Home.js';

function App() {
    console.log()
   return (
  <>
      <div class="container-header  d-flex flex-column justify-content-center">
      <div className="bg-text">
      <h1 className="row justify-content-center">Proyect Rick & Morty</h1>
      <h2 className="text-center p-3">Helcome to Rick & Morty Proyect!</h2>
      <p className='text-center p-2'>This proyect was made for practising React and to made a functional website</p>
      <p className='text-center P-2'>In this website you can know information of the characters of this animated series</p>
      <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
      <h2>Lets go!</h2>
      <button className='btn'>Characters</button>
      <button className='btn'>Contact</button>
      </div>
      
     </div>
</>
);
} 
export default App;
