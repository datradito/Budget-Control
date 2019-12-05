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

