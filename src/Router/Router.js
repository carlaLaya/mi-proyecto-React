import {BrowserRouter,Routes,Route} from "react-router-dom" ;
import Home from '../Componentes/Paginas/home.js';
import Character from '../Componentes/Paginas/Character';
import Contacto from '../Componentes/Contacto/Contacto';

export default function Router () {
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Character" element={<Character/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>

    </Routes>
    </BrowserRouter>


    )
}
/*bROWSERrOUTER ENGLOBVA EL RUTEO
ROUTES ACCIONA COMO switch indicando todas las posibilidades
Route ruta e si, ante un parametro*/