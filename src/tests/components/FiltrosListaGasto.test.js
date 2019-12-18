import React from 'react';
import { shallow } from 'enzyme';
import { FiltrosListaGasto } from '../../components/FiltrosListaGasto';
import { filters, altFilters } from '../fixtures/filters';

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







