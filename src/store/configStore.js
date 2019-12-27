import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import gastosReducer from '../reducers/gastosReducer';
import filterReducer from '../reducers/filtersReducer';
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
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(logger)
        );
        //composeEnhancers(applyMiddleware(thunk))
    return store;
};