import React from 'react';
import { shallow } from 'enzyme';
import gastos from '../fixtures/gastos';
import ListaItemGasto from '../../components/ListaItemGasto';


test('Deberia render ListaItemGasto con gastos', () => {
    const wrapper = shallow(<ListaItemGasto {...gastos[0]}/>);
    expect(wrapper).toMatchSnapshot();
});