import React from 'react';
import { shallow } from 'enzyme';
import { FiltrosListaGasto } from '../../components/FiltrosListaGasto';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, setFechaInicio, setFechaFin, sortByFecha, sortByImporte, wrapper;

beforeEach(() => {
    setTextFilter=jest.fn();
    setFechaInicio=jest.fn();
    setFechaFin=jest.fn();
    sortByFecha=jest.fn();
    sortByImporte=jest.fn();
    wrapper = shallow(
        <FiltrosListaGasto
            filters = {filters}
            setTextFilter={setTextFilter}
            setFechaInicio={setFechaInicio}
            setFechaFin={setFechaFin}
            sortByFecha={sortByFecha}
            sortByImporte={sortByImporte}
        />
    );
});

test('Deberia render FiltrosListaGasto', () => {
    expect(wrapper).toMatchSnapshot();
});

/**
 * https://airbnb.io/enzyme/docs/api/ShallowWrapper/setProps.html
 */
test('Deberia render FiltrosListaGasto con alt data correctamente', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Deberia handle text change', () => {
    const value='bill';
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Deberia handle sort by Fecha', () => {
    const value='date';
    //Como llamo a filters tengo que mockear data
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByFecha).toHaveBeenCalled();
});

test('Deberia handle sort by Importe', () => {
    const value='amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByImporte).toHaveBeenCalled();
});

test('Deberia handle date changes', () => {
    const value={
        fechaInicio: moment(0),
        fechaFin: moment(0).add(5, 'days')
    };
    wrapper.find('DateRangePicker').prop('onDatesChange')(value);
    expect(setFechaInicio).toHaveBeenLastCalledWith(value.fechaInicio);
    expect(setFechaFin).toHaveBeenLastCalledWith(value.fechaFin);
});

test('Deberia handle date focus changes', () => {
    const value=null;
    wrapper.find('DateRangePicker').prop('onFocusChange')(value);
    expect(wrapper.state('calendarFocused')).toBe(value);

});








