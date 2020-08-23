import React, { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/spinner';

function App () {

    const [ resumen, guardarResumen ] = useState({
        cotizacion: 0,
        datos: {
            marca: '',
            year: '',
            plan: ''
        }
    });

    const [ cargando, guardarCargando ] = useState(false);

    // obtener datos
    const { cotizacion, datos } = resumen;


    return ( 
        <div className="contenedor">
            <Header
             titulo="Cotizador de seguros"
            />

            <div className="contenedor__formulario">
                <Formulario
                guardarResumen={guardarResumen}
                guardarCargando={guardarCargando}
                />

                { cargando ? <Spinner /> : null }

                <Resumen 
                    datos={datos}
                />

                { !cargando ? 
                    <Resultado
                        cotizacion={cotizacion}
                    />: null
                }

            </div>
        </div>
    );
}
 
export default App;