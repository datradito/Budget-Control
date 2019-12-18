import React from 'react';
import FormGasto from './FormGasto';
import { connect } from 'react-redux';
import { editGasto, removeGasto } from '../actions/gastos';


export class EditGastosPage extends React.Component {
    onSubmit = (gasto) => {
        this.props.editGasto(this.props.gasto.id, gasto);
        this.props.history.push('/');
        console.log('Gasto actualizado', gasto);
    };
    onRemove = () => {
        this.props.removeGasto({id : this.props.gasto.id}); 
        this.props.history.push('/');
    };
    render() {
        return (
        <div>
            <FormGasto 
                gasto= {this.props.gasto}
                onSubmit={ this.onSubmit }
            />
            <button 
                    onClick = { this.onRemove }>
                    Borrar
            </button>
        </div>
        )
    }
};

//Modifico el export para poder usar spy en Jest
/**
 * https://react-redux.js.org/using-react-redux/connect-mapdispatch
 */

const mapsStateToProps = (state, props) => {
    return {
        gasto: state.gastos.find((gasto) => gasto.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editGasto: (id, gasto) => dispatch(editGasto( id, gasto )),
    removeGasto: (data) => dispatch(removeGasto( data ))
})

export default connect(mapsStateToProps, mapDispatchToProps)(EditGastosPage);


/**
 * *********************
 * ANTES DE REFACTORIZAR
 * *********************
 * //ACCEDO A props QUE PASA EL COMPONENTE Route 
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
 */