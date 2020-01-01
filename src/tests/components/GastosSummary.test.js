import React from 'react';
import { shallow } from 'enzyme';
import { GastosSummary } from '../../components/GastosSummary';

//beforeEach(() => wrapper = shallow(<TotalGastos />));


test('Deberia render GastosSummary', () => {
    const wrapper = shallow(<GastosSummary />);
    expect(wrapper).toMatchSnapshot();
}); 