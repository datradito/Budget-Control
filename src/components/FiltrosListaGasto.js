import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByImporte, sortByFecha, setFechaFin, setFechaInicio } from '../actions/filters';

/**
 * https://github.com/airbnb/react-dates
 */

export class FiltrosListaGasto extends React.Component{
    state = {
        //Necesito seguir el estado de 'calendarFocused' como en <FormGasto/>, default es null y luego pasa a string(calendario 1 o 2)
        calendarFocused: null
    };

    //SEGUN react-dates library
    onDatesChange = ({ fechaInicio , fechaFin}) => {
        this.props.setFechaInicio(fechaInicio);
        this.props.setFechaFin(fechaFin);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ( {calendarFocused} ))
    };

    onSortChange = (e) => {
        if(e.target.value==='date'){
            this.props.sortByFecha();
        }
        else if(e.target.value==='amount'){
            this.props.sortByImporte();
        }
    };

    onTextChange =  (e) => {
        this.props.setTextFilter(e.target.value);
    };

    render() {
        return (
            <div>
            <input 
                type="text" 
                //Tomo el valor text del filters en el store
                value={this.props.filters.text} 
                //Accedo a .dispatch() desde las props porque me lo envia connect()
                onChange={this.onTextChange} />

            <select 
                value={this.props.filters.sortBy}
                onChange={ this.onSortChange }
            >
                <option value="date">Fecha</option>
                <option value="amount">Importe</option>
            </select>

            <DateRangePicker
                startDate={this.props.filters.fechaInicio} // momentPropTypes.momentObj or null,
                endDate={this.props.filters.fechaFin} // momentPropTypes.momentObj or null,
                onDatesChange = {this.onDatesChange}
                //Toma el valor del state
                focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange= {() => false }
            />
        </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters : state.filters
});

const mapDispatchToProps = () => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByFecha: () => dispatch(sortByFecha()),
    sortByImporte: () => dispatch(sortByImporte()),
    setFechaInicio: (fechaInicio) => dispatch(setFechaInicio(fechaInicio)),
    setFechaFin: (fechaFin) => dispatch(setFechaFin(fechaFin)),
});


export default connect( mapStateToProps, mapDispatchToProps)( FiltrosListaGasto ) ;