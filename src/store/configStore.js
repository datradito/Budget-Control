import { createStore, combineReducers} from 'redux';
import gastosReducer from '../reducers/gastos';
import filterReducer from '../reducers/filters';
//import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(
        combineReducers({
        //key (prop state) : value (reducer name)
        gastos: gastosReducer,
        filters: filterReducer,
        }),
        //CONFIG ANTES DE UTILIZAR thunk
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
        //composeEnhancers(applyMiddleware(thunk))
    return store;
};


// //Creo Store with combine
// const store = createStore(combineReducers({
//     //key (prop state) : value (reducer name)
//     gastos: gastosReducer,
//     filters: filterReducer,
//     })
// );