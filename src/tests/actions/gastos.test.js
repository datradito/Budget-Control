import { addGasto, editGasto, removeGasto} from '../../actions/gastos';

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
    //defino un obj para pasarle a la accion
    const dataGasto = {
        descrip : 'Luz',
        note : 'ejemplo',
        importe : 5000,
        creadoAt : 1000
    };
    //paso obj
    const action = addGasto(dataGasto);
    expect(action).toEqual({
        type: 'ADD_GASTO',
        gasto: {
            ...dataGasto,
            id: expect.any(String) //uso any() xq el id es random y no tngo manera de comparar
        }
    })
});

//addGasto default, without data:
test('deberia ver addGasto action obj con valor x default',  () => {
    const action = addGasto();
    expect(action).toEqual({
        type: 'ADD_GASTO',
        gasto: {
            id: expect.any(String),
            descrip : '',
            note : '',
            importe : 0,
            creadoAt : 0,
        }
    });
});
