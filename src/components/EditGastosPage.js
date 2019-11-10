import React from 'react';
import FormGasto from './FormGasto';
import { connect } from 'react-redux';
import { editGasto, removeGasto } from '../actions/gastos';

//ACCEDO A props QUE PASA EL COMPONENTE Route 
const EditGastosPage = (props) => {
    return (
        <div>
            <FormGasto 
                gasto= {props.gasto}
                onSubmit={ (gasto) => {
                    //dispatch(action())
                    props.dispatch(editGasto(props.gasto.id, gasto));
                    //redirijo a home
                    props.history.push('/');
                    console.log('Gasto actualizado', gasto);
                }}
            />
            <button 
                    onClick = { () => {
                    props.dispatch(removeGasto({id : props.gasto.id})); 
                    //redirect:
                    props.history.push('/');}}>
                    Borrar
            </button>
        </div>
    );
};


const mapsStateToProps = (state, props) => {
    return {
        //USO props.match.params PARA ACCEDER A LOS PARAMETROS DEL COMPONENTE <Route/>
        //find() javascript al array state para obtener el obj gasto con el id buscado
        gasto: state.gastos.find((gasto) => gasto.id === props.match.params.id)
    };
};

export default connect(mapsStateToProps)(EditGastosPage);