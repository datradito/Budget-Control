import moment from 'moment';
import gastosReducer from '../../reducers/gastosReducer';
import gastos from '../fixtures/gastos';


test('Deberia setear el default state', () => {
    const state = gastosReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Deberia borrar gasto por ID', () => {
    const action = {
        type: 'REMOVE_GASTO',
        id: gastos[1].id
    };
    const state = gastosReducer(gastos, action)
    expect(state).toEqual([
        gastos[0],
        gastos[2]
    ])
});

test('NO deberia borrar gasto por ID no encontrada', () => {
    const action = {
        type: 'REMOVE_GASTO',
        id: '-1'
    };
    const state = gastosReducer(gastos, action);
    expect(state).toEqual(gastos);
});

test('Deberia ADD_GASTO', () => {
    const gasto = {
        id: '109',
        descrip: 'Otro gasto',
        note:'',
        importe: 50000,
        creadoAt: 20000
    };
    const action = {
        type: 'ADD_GASTO',
        gasto
    };
    const state = gastosReducer(gastos, action);
    expect(state).toEqual([...gastos, gasto]);
});

test('Deberia EDIT_GASTO', () => {
    
    const descrip = 'Gas EDIT';
    const action = {
        type: 'EDIT_GASTO',
        id: gastos[0].id,
        updates: {
            descrip
        }
    };

    const state = gastosReducer(gastos, action);
    expect(state[0].descrip).toBe( descrip );
});

test('NO deberia EDIT_GASTO si no encuentra ID', () => {
    
    const gastoEdit = 'Gas EDIT';
    const id = '-1';
    const action = {
        type: 'EDIT_GASTO',
        id,
        updates: {
            descrip: gastoEdit
        }
    };
    const state = gastosReducer(gastos, action);
    expect(state).toEqual(gastos);
});

