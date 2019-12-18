import React from 'react';
import { shallow } from 'enzyme';
import { AddGastosPage } from '../../components/AddGastosPage';
import gastos from '../fixtures/gastos';

/**
 * https://jestjs.io/docs/en/api#beforeeachfn-timeout
 */

let addGasto, history, wrapper;

beforeEach(() => {
    addGasto = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddGastosPage addGasto={addGasto} history={history} />);
})

test('Deberia render AddGastosPage', () => {
    expect(wrapper).toMatchSnapshot();
}); 

test('Deberia handle onSubmit', () => {
    wrapper.find('FormGasto').prop('onSubmit')(gastos[1]);
    expect(history.push).toHaveBeenLastCalledWith('./');
    expect(addGasto).toHaveBeenLastCalledWith(gastos[1]);
}); 
