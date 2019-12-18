import React from 'react';
import { shallow } from 'enzyme';
import { EditGastosPage } from '../../components/EditGastosPage';
import gastos from '../fixtures/gastos';


/**
 * https://jestjs.io/docs/en/api#beforeeachfn-timeout
 */

let editGasto, removeGasto, history, wrapper;

beforeEach(() => {
    editGasto = jest.fn();
    removeGasto = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(  
        <EditGastosPage 
                    editGasto={editGasto} 
                    removeGasto= {removeGasto} 
                    history={history} 
                    gasto={gastos[2]}
        />);
});

test('Deberia render EditGastosPage', () => {
    expect(wrapper).toMatchSnapshot();
}); 

test('Deberia handle editGasto', () => {
    wrapper.find('FormGasto').prop('onSubmit')(gastos[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editGasto).toHaveBeenLastCalledWith(gastos[2].id, gastos[2]);

}); 

test('Deberia handle removeGasto', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeGasto).toHaveBeenLastCalledWith({
        id: gastos[2].id
    });

}); 
