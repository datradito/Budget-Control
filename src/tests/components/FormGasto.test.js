import React from 'react';
import { shallow } from 'enzyme';
import FormGasto from '../../components/FormGasto';
import gastos from '../fixtures/gastos';

test('Deberia render FormGasto', () => {
    const wrapper = shallow(<FormGasto />);
    expect(wrapper).toMatchSnapshot();
});

test('Deberia render FormGasto con datos de gastos', () => {
    const wrapper = shallow(<FormGasto gasto = { gastos[0] } />);
    expect(wrapper).toMatchSnapshot();
});

test('Deberia render error para submit invalido', () => {
    const wrapper = shallow(<FormGasto />);
    expect(wrapper).toMatchSnapshot(); 
    /**
     * see https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
     */
    wrapper.find('form').simulate('submit', {
        prevenDefault: () => {}
    });
    /**
     * see https://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html
     */
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});


