import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';


import { addGasto, removeGasto} from './actions/gastos';
import { setTextFilter } from './actions/filters';
import getGastosVisibles from './selectors/gastos';


const store = configStore();

store.dispatch(addGasto( { descrip: 'ticket Daniel', importe:15.00, creadoAt:75} ));
store.dispatch(addGasto( { descrip: 'ticket Brenda', importe:200.00, creadoAt: 50} ));
store.dispatch(addGasto( { descrip: 'ticket Santi', importe:50.00, creadoAt:-100} ));
store.dispatch(addGasto( { descrip: 'ticket Giuli', importe:25.00, creadoAt:100} ));

const state = store.getState();
const gastoVisible = getGastosVisibles(state.gastos, state.filters);
console.log('Filtro text aplicado')
console.log(gastoVisible);

console.log('Total de Gastos')
console.log(store.getState( ));

//paso el store al componente AppRouter, y de ahi todos tienen acceso con connect
//store = {store} --> prop store del componente Provider de redux
//le paso {objeto myStore}
const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));

