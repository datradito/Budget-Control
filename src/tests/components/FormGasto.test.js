import React from 'react';
import { shallow } from 'enzyme';
import FormGasto from '../../components/FormGasto';
import gastos from '../fixtures/gastos';
import moment from 'moment';


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
        preventDefault: () => {}
    });
    /**
     * see https://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html
     */
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Deberia setear descripcion en un cambio de input', () => {
    const value = 'Nueva descripcion';
    const wrapper = shallow(<FormGasto />);
    //con at(0) elijo el primer input tag
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('descrip')).toBe(value);
});

test('Deberia setear note on textareachange', () => {
    const value = 'Nueva nota';
    const wrapper = shallow(<FormGasto />);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('nota')).toBe(value);
});

test('Deberia setear importe si input es valid', () => {
    const value = '44.50';
    const wrapper = shallow(<FormGasto />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('importe')).toBe(value);

});

test('NO deberia setear importe si input es invalid', () => {
    const value = '44.5055';
    const wrapper = shallow(<FormGasto />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('importe')).toBe('');
});

/** Fake functions
 * https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
 */
test('Deberia llamar onSubmit prop para un valid form submit', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<FormGasto gasto = {gastos[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        descrip: gastos[0].descrip,
        nota: gastos[0].nota,
        importe: gastos[0].importe,
        creadoAt: gastos[0].creadoAt
    });
});

/**
 * https://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html
 */
test('Deberia set new date para onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<FormGasto />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('creadoAt')).toEqual(now);
});

test('Deberia set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<FormGasto />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});





