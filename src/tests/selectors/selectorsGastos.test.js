import moment from 'moment';
import Selectgastos from '../../selectors/gastos';


const gastos = [
    {
        id: '1',
        descrip: 'Gas',
        note: '',
        importe: 120000,
        creadoAt: 0
    },
    {
        id: '2',
        descrip: 'Luz',
        note: '',
        importe: 50000,
        creadoAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        descrip: 'Varios',
        note:'',
        importe: 100,
        creadoAt: moment(0).add(4, 'days').valueOf()
    }
];

//TEST SELECTOR by text value
test('deberia comenzar test de Selector por Texto', () => {
    const filter = {
        text: 'a',
        sortBy: 'fecha',
        FechaInicio: undefined,
        FechaFin: undefined
    }
    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[2], gastos[0]])

});

//TEST SELECTOR fechaInicio
test('deberia comenzar test de Selector por Fecha', () => {
    const filter = {
        text: '',
        sortBy: 'fecha',
        FechaInicio: 0,
        FechaFin: undefined
    };

    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[0], gastos[2]]);

});

//TEST SELECTOR BY fechaFin
test('deberia comenzar test de Selector por FechaFin', () => {
    const filter = {
        text: '',
        sortBy: 'fecha',
        FechaInicio: moment(0),
        FechaFin: moment(0).add(5, 'days').valueOf()
    };

    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[0], gastos[1], gastos[2]]);

});

//TEST SELECTOR sort by date
test('deberia comenzar test de Selector: Orden por Fecha', () => {
    const filter = {
        text: '',
        sortBy: 'fecha',
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
        sortBy: 'importe',
        FechaInicio: undefined,
        FechaFin: undefined
    };

    const result = Selectgastos(gastos, filter);
    expect(result).toEqual([gastos[0], gastos[1], gastos[1]]);

});


