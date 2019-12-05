import React from 'react';
import { shallow } from 'enzyme';

//Importo ListaGasto por nombre, no el default export del componente
import { ListaGasto } from '../../components/ListaGasto';
import gastos from '../fixtures/gastos';

test('Deberia render ListaGasto con gastos', () => {
    const wrapper = shallow(<ListaGasto gastos={ gastos }/>);
    expect(wrapper).toMatchSnapshot();
})

test('Deberia render ListaGasto sin gastos', () => {
    const wrapper = shallow(<ListaGasto gastos={ [] }/>);
    expect(wrapper).toMatchSnapshot();
})