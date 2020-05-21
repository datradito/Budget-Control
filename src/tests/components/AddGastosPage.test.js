import React from 'react';
import { shallow } from 'enzyme';
import { AddGastosPage } from '../../components/AddGastosPage';
import gastos from '../fixtures/gastos';

/**
 * https://jestjs.io/docs/en/api#beforeeachfn-timeout
 */

let startAddGasto, history, wrapper;

beforeEach(() => {
    startAddGasto = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddGastosPage startAddGasto={startAddGasto} history={history} />);
})

test('Deberia render AddGastosPage', () => {
    expect(wrapper).toMatchSnapshot();
}); 

test('Deberia handle onSubmit', () => {
    wrapper.find('FormGasto').prop('onSubmit')(gastos[1]);
    expect(history.push).toHaveBeenLastCalledWith('./');
    expect(startAddGasto).toHaveBeenLastCalledWith(gastos[1]);
}); 
