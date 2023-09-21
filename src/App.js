//importo hojas de estilo
import './App.css';
// importo un paquete de react, funcion que nos provee reacrt para manipular el estado a lo largo del tiempo
//import  {useState}  from 'react';
//importo paquete
import React from 'react';
//importo carpeta de componentes
import Boton from './Componentes/Boton/Boton.js';
import Footer from './Componentes/Footer/Footer.js';
import Personajes from './Componentes/Paginas/Personajes.js';
import Home from './Componentes/Paginas/Home.js';
import Navegacion from './Componentes/Navegacion/Navegacion.js';
import Contacto from './Componentes/Contacto/Contacto.js';
import Tarjetas from './Componentes/Paginas/Tarjetas.js';

  function App() {
    // const nombre=useState("Carla"); asi se hacia originalmente, pero con useState cambia a la siguiente forma, puedo poner array, un objeto vacio, etc.
    //const [nombre ,setNombre]=useState("Carla");
    //genero una funcion, y la ejecuto poniendo la funcion dentro de los parentesis, donde genere el evento.
    //const cambiarNombre=() =>{
      //console.log("Cambie el Nombre");
    //setNombre("Pedro")
  
    return (
        <>
        {/*<Contacto cambiarNombre={setNombre}/>*/}
        <h1>Hola soy APP</h1>
        {/*<button onClick={cambiarNombre}>Click App</button>*/}
        </>
  );
} 
export default App;
