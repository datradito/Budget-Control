import React from 'react';
import { connect } from 'react-redux';
import FormGasto from './FormGasto';
import addGasto from '../actions/gastos';


//Al utilizar connect("state")("Componente") tengo acceso a .dispatch() dsd props. Ej: 
//const Componente = (props) => (jsx)

const AddGastosPage = (props) => (
    <div>
        <h1>Agrega Gasto</h1>
       <FormGasto 
            //La prop OnSubmit = {} recibe dsd el componente <FormGasto /> el objeto con los datos para enviar al store, 
            onSubmit = {(gasto) => {
                console.log(gasto);
                props.dispatch(addGasto(gasto));
               
                //El componente recibe history kmo prop a travez de react-router, ver API.
                //con .push('/') redirigo al dashboard page.
                props.history.push('./'); 
           }}
       />
    </div>

);

export default connect()(AddGastosPage);