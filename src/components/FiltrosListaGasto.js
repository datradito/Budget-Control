import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByImporte, sortByFecha, setFechaFin, setFechaInicio } from '../actions/filters';

//VER https://github.com/airbnb/react-dates

//STATELESS FUNCTIONAL COMPONENT:
class FiltrosListaGasto extends React.Component{
    state = {
        //Necesito seguir el estado de 'calendarFocused' como en <FormGasto/>, default es null y luego pasa a string(calendario 1 o 2)
        calendarFocused: null
    };

    //SEGUN react-dates library
    onDatesChange = ({ fechaInicio , fechaFin}) => {
        this.props.dispatch(setFechaInicio(fechaInicio));
        this.props.dispatch(setFechaFin(fechaFin));
    };

    onFocusChange = (calendarFocused) => {
        //ACTUALIZO EL ESTADO
        //USO => ({}) EN VEZ DE => { } XQ DEVUELVO IMPLICITAMENTE EL OBJ
        this.setState(() => ( {calendarFocused} ))
    };


    render() {
        return (
            <div>
            <input 
                type="text" 
                //Tomo el valor text del filters en el store
                value={this.props.filters.text} 
                //Accedo a .dispatch() desde las props porque me lo envia connect()
                onChange={ ( e ) => {
                    this.props.dispatch(setTextFilter(e.target.value));
             }} />

            {/*Ver <select> en HTML, funciona igual */}
            <select 
                value={this.props.filters.sortBy}
                onChange={ (e) => {
                    if(e.target.value==='fecha'){
                        this.props.dispatch(sortByFecha());
                    }
                    else if(e.target.value==='importe'){
                        this.props.dispatch(sortByImporte());
                    }
                }}
            >
                <option value="fecha">Fecha</option>
                <option value="importe">Importe</option>
            </select>

            <DateRangePicker
                //CONFIG LAS PROPS DateRangePicker SEGUN DOC's
                
                startDate={this.props.filters.fechaInicio} // momentPropTypes.momentObj or null,
                //startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.props.filters.fechaFin} // momentPropTypes.momentObj or null,
                //endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                //onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
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

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

export default connect( mapStateToProps )( FiltrosListaGasto ) ;