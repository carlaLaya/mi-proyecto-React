<<<<<<< HEAD


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
=======
//importo hojas de estilo
import './App.css';
// importo un paquete de react, funcion que nos provee reacrt para manipular el estado a lo largo del tiempo
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be

//importo paquete
import React from 'react';
//importo carpeta de componentes
//import Boton from './Componentes/Boton/Boton.js'
//import Footer from './Componentes/Footer/Footer.js';
import Personajes from './Componentes/Paginas/Personajes.js';
import Home from './Componentes/Paginas/Home.js';
//import Navegacion from './Componentes/Navegacion/Navegacion.js';
//import Contacto from './Componentes/Contacto/Contacto.js';

<<<<<<< HEAD
function App() {
    console.log()
   return (
  <>
      {/*<h1 className='texto'>Hola React</h1>}
=======
  function App() {
    //useState nos devuelve un array estado y setter (es una funcion que permite modificar el estado)
  
    return (
  <div> 
    <header>
      {/*<h1 className='texto'>Hola React</h1>*/}
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be
      {/*<Boton tituloBoton={"chau"}/>*/}
      {/*<p>Ricky y Morty</p>*/}
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
      {/*<Footer dato={nombre}/>*/}
      {/*<Boton tituloBoton={"Characters"}/> reutilizo y cambio elnombre del boton*/}
       {/* <Boton tituloBoton={"Contact"}/>reutilizo y cambio elnombre del boton*/}
     </div>
</>
);
} 
export default App;
