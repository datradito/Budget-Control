import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


test('Deberia render Header correctamente', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})