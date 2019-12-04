import React from 'react';
import { shallow } from 'enzyme';
import ListaGasto from '../../components/ListaGasto';

test('Deberia render ListaGasto correctamente', () => {
    const wrapper = shallow(<ListaGasto />);
    expect(wrapper).toMatchSnapshot();
})