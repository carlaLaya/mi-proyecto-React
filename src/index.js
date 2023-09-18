//importo hojas de estilo
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Home from './Componentes/Paginas/Home.js';
import Boton from './Componentes/Boton/Boton.js'
import Footer from './Componentes/Footer/Footer.js';
import Personajes from './Componentes/Paginas/Personajes.js';
import Paginas from './Componentes/Paginas/Home.js';
import Navegacion from './Componentes/Navegacion/Navegacion.js';
import Contacto from './Componentes/Contacto/Contacto.js';
import Tarjeta from './Componentes/Paginas/Tarjetas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacion/>
  </React.StrictMode>,
)

