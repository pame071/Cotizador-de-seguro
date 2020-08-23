import React from 'react'
import PropType from 'prop-types';


const Resultado = ({cotizacion}) => {
   
    return ( 
    (cotizacion == 0) ? 
        <p>Elige marca, año y tipo de seguro</p> 
        : 
        <p className="texto">El total es: $ {cotizacion}</p>
    );
}

Resultado.propType = {
    cotizacion: PropType.number.isRequired
}
 
export default Resultado;