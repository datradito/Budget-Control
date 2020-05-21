import React from 'react';
import { connect } from 'react-redux';
import FormGasto from './FormGasto';
import { startAddGasto } from '../actions/gastos';

export class AddGastosPage extends React.Component {
    onSubmit = (gasto) => {
        this.props.startAddGasto(gasto);
        this.props.history.push('./'); 
    };
    render() {
        return (
            <div>
            <h1>Agrega Gasto</h1>
            <FormGasto onSubmit = {this.onSubmit}/>
        </div>
        );
    }
}

//Modifico el export para poder usar spy en Jest
/**
 * https://react-redux.js.org/using-react-redux/connect-mapdispatch
 */
const mapDispatchToProps = (dispatch) => ({
    startAddGasto: (gasto) => dispatch(startAddGasto(gasto))
})
export default connect(undefined, mapDispatchToProps)(AddGastosPage);



/**
 * ********************************************************************************
 * Documento el stateless component que se utilizaba antes de configurar para tests
 * ********************************************************************************
 */

//Al utilizar connect("state")("Componente") tengo acceso a .dispatch() dsd props. Ej: 
//const Componente = (props) => (jsx)

// const AddGastosPage = (props) => (
//     <div>
//         <h1>Agrega Gasto</h1>
//        <FormGasto 
//             //La prop OnSubmit = {} recibe dsd el componente <FormGasto /> el objeto con los datos para enviar al store, 
//             onSubmit = {(gasto) => {
//                 console.log(gasto);
//                 //props.dispatch(addGasto(gasto));
//                 props.onSubmit(gasto);
//                 //El componente recibe history kmo prop a traves de react-router, ver API.
//                 //con .push('/') redirijo al dashboard page.
//                 props.history.push('./'); 
//            }}
//        />
//     </div>

// );