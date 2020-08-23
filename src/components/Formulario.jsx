import React, { useState } from 'react';

import { obtenerDiferenciaYear, calcularMarca, obtenerPlan }  from '../helper';
import PropType from 'prop-types';

const Formulario = ({guardarResumen, guardarCargando}) => {


    const [ datos, guardarDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [ error, guardarError ] = useState(false);

    //Extraer los valores del state
    const { marca, year, plan } = datos;

    //Leer los datos dek formulario y colocar en el state
    const obtenerInformacion = e =>{
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }


    //Cuando el usuario presione submit
    const cotizarSeguro = e =>{
        e.preventDefault();

        if(marca.trim() == '' || year.trim() == '' || plan.trim() == ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        // Una base de 2000
        let resultado = 2000;

        // obtener la diferencia de año
        const diferencia = obtenerDiferenciaYear(year);
        console.log("diferencia", diferencia);

        // por cada año hay que restar 3%
        resultado -= ((diferencia * 3) * resultado) / 100;
        console.log("resultado",resultado);
        
        // eurepeo aumenta 30%
        // americano aumenta 15%
        // asiatico aumenta 5%
        resultado = calcularMarca(marca) * resultado;
        console.log("resultado marca",resultado);

        // basico aumenta 20%
        // completo 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat( incrementoPlan *  resultado).toFixed(2);
        console.log("resultado plan",resultado);


        guardarCargando(true);
        setTimeout(()=>{

            // Elimina el spinner
            guardarCargando(false);
            // total
            guardarResumen({
                cotizacion: resultado,
                datos
            });

        }, 3000);

    }

    return ( 
        <form onSubmit={cotizarSeguro}>

            { error ? <div className="error">Todos los campos son obligatorio</div>: null }
            <div className="campo">
                <label>Marca</label>
                <select 
                    name="marca" 
                    id="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </select>
            </div>
            <div className="campo">
                <label>Año</label>
                <select  
                    name="year" 
                    id="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </select>
            </div>

            <div className="campo">
                <label>Plan</label>
                <input 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked = { plan == 'basico'}
                    onChange={obtenerInformacion}
                /> Basico

                <input 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked = { plan == 'completo'}
                    onChange={obtenerInformacion}
                /> Completo
            </div>

            <button type="submit">Cotizar</button>
        </form>
     );
}

Formulario.propType = {
    guardarResumen: PropType.func.isRequired,
    guardarCargando: PropType.func.isRequired
}
 
export default Formulario;