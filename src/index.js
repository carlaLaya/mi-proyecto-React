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
import Card from './Componentes/Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App/>
  </React.StrictMode>,
)

=======
    <Personajes />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 620fadef9f62876bd1aebfee9c317e88dcdf04be
