import {
    setFechaInicio, 
    setFechaFin, 
    setTextFilter,
    sortByFecha, 
    sortByImporte
} from '../../actions/filters';

import moment from 'moment';

test('deberia comenzar test de setFechaInicio', () => {
    const action = setFechaInicio(moment(0));
    expect(action).toEqual({
        type: 'SET_FECHA_INICIO',
        fechaInicio: moment(0)
    })
});

test('deberia comenzar test de setFechaFin', () => {
    const action = setFechaFin(moment(0));
    expect(action).toEqual({
        type: 'SET_FECHA_FIN',
        fechaFin: moment(0)
    })
});

test('deberia comenzar test de setTextFilter con texto', () => {
    const action = setTextFilter('prueba');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'prueba'
    })
});

test('deberia comenzar test de setTextFilter default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('deberia comenzar test de sortByFecha', () => {
    const action = sortByFecha(moment(2));
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: moment(2)
    })
});

test('deberia comenzar test de sortByImporte', () => {
    const action = sortByImporte('123456');
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: '123456'
    })
});


