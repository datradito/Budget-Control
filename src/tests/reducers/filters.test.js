import filters from '../../reducers/filtersReducer';
import moment from 'moment';
import filtersReducer from '../../reducers/filtersReducer';
/** type: '@@INIT' es el action que dispatch redux al inicio
 * sirve para revisar los valores por default
 */
test('Deberia setear filtros por default', () => {
    const state = filters(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        fechaFin: moment().endOf('month'),
        fechaInicio: moment().startOf('month')
    });
});

test('Deberia setear sortBy como amount', () => {
    const state = filters(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
}) 

test('Deberia setear sortBy como date', () => {
    const currentState = {
        text: '', 
        fechaInicio: undefined,
        fechaFin: undefined,
        sortBy: 'amount'

    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('Deberia setear text filter', () => {
    const text = 'mi txt de prueba';
    const action = { 
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);    
})


test('Deberia setear fechaInicio filter', () => {
    const fechaInicio = moment();
    const action = { 
        type: 'SET_FECHA_INICIO',
        fechaInicio
    };
    const state = filtersReducer(undefined, action);
    /**Uso toEqual() porque comparo un objeto
    */
    expect(state.fechaInicio).toEqual(fechaInicio);    
})


test('Deberia setear fechaFin filter', () => {
    const action = { type: 'SET_FECHA_FIN'};
    const state = filtersReducer(undefined, action);
    expect(state.fechaFin).toBe(action.text);    
})