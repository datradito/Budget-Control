import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { startAddGasto, addGasto, editGasto, removeGasto} from '../../actions/gastos';
import gastos from '../fixtures/gastos';
import { database } from 'firebase';

const middlewares = [thunk, logger]
const createMockStore = configureMockStore(thunk)

//removeGasto:
test('deberia ver remove gastos action object', () => {
    //guardo lo q devuelve la accion
    const action = removeGasto({ id: '123abc'});
    //uso toEqual porque === con obj o arrays es FALSE
    expect(action).toEqual({
        type: 'REMOVE_GASTO',
        id: '123abc'
    });
});

//editGasto:
test('deberia ver editGasto funcionando', () => {
    const action = editGasto(
        '1234abcd',
        { note: 'nota actualizada' }
    );

    expect(action).toEqual({
        type: 'EDIT_GASTO',
        id: '1234abcd',
        updates: {
            note: 'nota actualizada'
        }
    });
});

//addGasto:
test('deberia ver addGasto action obj con nuevos valores',  () => {
    const action = addGasto(gastos[2]);
    expect(action).toEqual({
        type: 'ADD_GASTO',
        gasto: gastos[2]
    })
});

//Firebase tests
//Como los tests son async, pasamos done como argumento p que jest 'espere' los callbacks
test('Deberia agregar Gasto a database y store', (done) => {
    const store = createMockStore({});
    const gastoData = {
        descrip: 'Fiat 500x Cross',
        note: '4X4',
        importe: 1250000, 
        creadoAt: 5000,
    };

    store.dispatch(startAddGasto(gastoData))
    .then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_GASTO',
            gasto:{
                id:expect.any(String),
                ...gastoData
            } 
        });
        //Uso return para pasar la respuesta a la cadena de promises
        return database.ref(`gastos\${actions[0].gasto.id}`).once('value')
    })
    .then((snapshot)=>{
        expect(snapshot.val()).toEqual(gastoData);
        done();
    })
    .catch((e)=>{
        console.log('Error desde test:', e);
    })
});

test('Deberia agregar Gasto con defaults a database y store', () => {
    const store = createMockStore({});
    const gastoDefaults = {
        descrip: '',
        note: '',
        importe: 0, 
        creadoAt: 0,
    };

    store.dispatch(startAddGasto({}))
    .then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_GASTO',
            gasto:{
                id:expect.any(String),
                ...gastoDefaults
            } 
        });
        //Uso return para pasar la respuesta a la cadena de promises
        return database.ref(`gastos\${actions[0].gasto.id}`).once('value')
    })
    .then((snapshot)=>{
        expect(snapshot.val()).toEqual(gastoDefaults);
        done();
    })
    .catch((e)=>{
        console.log('Error desde test: ', e);
    })
});


//addGasto default, without data:
// test('deberia ver addGasto action obj con valor x default',  () => {
//     const action = startAddGasto();
//     expect(action).toEqual({
//         type: 'ADD_GASTO',
//         gasto: {
//             id: expect.any(String),
//             descrip : '',
//             note : '',
//             importe : 0,
//             creadoAt : 0,
//         }
//     });
// });
