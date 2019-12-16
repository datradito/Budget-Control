import React from 'react';
import { shallow } from 'enzyme';
import GastosDashboardPage from '../../components/GastosDashboardPage';


test('Deberia render GastosDashboardPage', () => {
    const wrapper = shallow(<GastosDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});