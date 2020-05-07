import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
//import  './playground/promises';

const store = configStore();
const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));

// import getGastosVisibles from './selectors/gastos';

// const state = store.getState();
// const gastoVisible =getGastosVisibles(state.gastos, state.filters);
// console.log('Filtro text aplicado')
// console.log(gastoVisible);

// console.log('Total de Gastos')
// console.log(store.getState( ));

//paso el store al componente AppRouter, y de ahi todos tienen acceso con connect
//store = {store} --> prop store del componente Provider de redux
//le paso {objeto myStore}


//********************************************************************************
/*EL SIGUIENTE FRAGMENTO DE CODIGO ES PARA ESCRIBIR REGISTROS DE PRUEBA A FIREBASE
//********************************************************************************


// import { startAddGasto, removeGasto} from './actions/gastos';

// store.dispatch(startAddGasto( { descrip: 'ticket Daniel', importe:15.00, creadoAt:75} ));
// store.dispatch(startAddGasto( { descrip: 'ticket Brenda', importe:200.00, creadoAt: 50} ));
// store.dispatch(startAddGasto( { descrip: 'ticket Santi', importe:50.00, creadoAt:-100} ));
// store.dispatch(startAddGasto( { descrip: 'ticket Giuli', importe:25.00, creadoAt:100} ));
*/

