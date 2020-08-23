import React from 'react'
import { primerMayuscula }  from '../helper';
import PropType from 'prop-types';

const Resumen = ({datos}) => {

    //Extraer datos
    const { marca, year, plan } =  datos;
    if(marca === '' || year === '', plan === '') return null;

    return ( 
        <div className="container__resumen">
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { primerMayuscula(marca) }</li>
                <li>Año del auto: { year }</li>
                <li>Plan: { primerMayuscula(plan) }</li>
            </ul>
        </div>
     );
}

Resumen.propType = {
    datos: PropType.object.isRequired
}
 
export default Resumen;