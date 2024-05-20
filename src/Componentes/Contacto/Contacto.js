import Navegacion from '../Navegacion/Navegacion';
import './Contacto.css';

export default function Contacto () {
    return(
        <>
        <Navegacion />
        <section>
            <main className='container-fluid'>
            <div className='bg-text1'>
              <h4 className='row justify-content-center'>Contacto</h4>   
              <p className='text-center p-3'>Déjanos tus datos para poder contactarte</p>
              <form className="row colorBLue g-3 p-4">
                <div className="col-md-6">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control  p-2" id="nombre" name="name" required=""/>
                </div>
                <div className="col-md-6">
                  <label for="correo" class="form-label">Email</label>
                  <input type="email" class="form-control  p-2" id="correo" name="email" required=""/>
                    </div>
                    <div className="col-12">
                      <label for="mensaje" class="form-label">Mensaje</label>
                      <textarea id="mensaje" class="form-control p-4" name="messege" required="">
                      </textarea>
                        </div>
                        <div class="col-12"><button type="submit" class="btn botones colorW">Enviar</button>
                        </div>
                        </form>
            </div>
            </main>
            </section>
            </>
        )
      };
    