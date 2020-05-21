import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import logger from 'redux-logger';
import gastosReducer from '../reducers/gastosReducer';
import filterReducer from '../reducers/filtersReducer';
import thunk from 'redux-thunk';

//Setup para tener redux devtools en navegador con el middleware thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const middlewares = [thunk, logger];

    const store = createStore(
        combineReducers({
        //key (prop state) : value (reducer name)
        gastos: gastosReducer,
        filters: filterReducer,
        }),
        composeEnhancers(applyMiddleware(...middlewares))
        //CONFIG ANTES DE UTILIZAR thunk
            //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            //applyMiddleware(logger)
        );
        
    return store;
};