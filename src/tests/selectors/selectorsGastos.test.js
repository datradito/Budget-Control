import moment from 'moment';
import Selectgastos from '../../selectors/gastos';
import gastos from '../fixtures/gastos';



//TEST SELECTOR by text value
test('deberia comenzar test de Selector por Texto', () => {
    const filter = {
        text: 'a',
        sortBy: 'date',
        FechaInicio: undefined,
        FechaFin: undefined
    }
    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[2], gastos[0]])

});

//TEST SELECTOR fechaInicio
test('deberia comenzar test de Selector por FechaInicio', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        FechaInicio: moment(0),
        FechaFin: undefined
    };

    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[1], gastos[0], gastos[2] ]);

});

//TEST SELECTOR BY fechaFin
test('deberia comenzar test de Selector por FechaFin', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        FechaInicio: undefined,
        FechaFin: moment(0).add(5, 'days')
    };

    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[2], gastos[0], gastos[1]]);

});

//TEST SELECTOR sort by date
test('deberia comenzar test de Selector: Orden por Fecha', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        FechaInicio: undefined,
        FechaFin: undefined
    };

    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[2], gastos[0], gastos[1]]);

});

//TEST SELECTOR sort by amount
test('deberia comenzar test de Selector: Orden por Importe', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        FechaInicio: undefined,
        FechaFin: undefined
    };

    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[1], gastos[2], gastos[0]]);

});


