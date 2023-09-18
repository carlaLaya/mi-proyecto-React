//importo hojas de estilo
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Boton from './Componentes/Boton/Boton.js'
import Personajes from './Componentes/Paginas/Personajes.js';
import Paginas from './Componentes/Paginas/Home.js';
import Navegacion from './Componentes/Navegacion/Navegacion.js';
import Contacto from './Componentes/Contacto/Contacto.js';
import Tarjetas from './Componentes/Paginas/Tarjetas.js';
import Home from './Componentes/Paginas/Home.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
