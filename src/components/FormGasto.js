import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class FormGasto extends React.Component{
    //COMO EN OTRAS OCACIONES DEFINO SUPER PARA ACCEDER AL STATE
    constructor(props) {
        super(props);
        
        this.state = {
            //Si estoy editando, el state se llena con las props que se pasan a 
            //el componente <FormGasto/> si no, lleno el state con los valores por
            //defecto, ej: nota: props.gasto ? props.gasto.nota : '',
            descrip: props.gasto ? props.gasto.descrip : '',
            nota: props.gasto ? props.gasto.nota : '',
            importe: props.gasto ? (props.gasto.importe / 100).toString() : '',
            creadoAt: props.gasto ? moment(props.gasto.creadoAt) : moment(),
            calendarFocused: false,
            error:'',
        }
    }

    onChangeDescrip = (e) => {  
        const descrip = e.target.value;
        this.setState( () => ( { descrip } ) );
    };

    onChangeNota = (e) => {
        const nota = e.target.value;
        this.setState( () => ( { nota } ) );
    };

    onChangeImporte = (e) => {
        const importe = e.target.value;
        
        //REGULAR EXRPESSIONS, ver regex101.com
        if (!importe || importe.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState( () => ( { importe } ) );
        }
    };

    onDateChange = (creadoAt) => {
        if (creadoAt) {
            this.setState( () => ({ creadoAt }) );
    
        }
    };

    onFocusChange = ( {focused} ) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };

    onSubmit = (e) => {
        //Prevengo refresh del explorador
        e.preventDefault();

        if(!this.state.importe || !this.state.descrip) {
            this.setState( () => (
                {error: 'Por favor ingrese descripcion e importe...'}
            ) )
        } else {
            this.setState( ()=>({ error:'' }));
            //props.onSubmit vienen desde el componente AddGastosPage pasada como props
            this.props.onSubmit({
                descrip: this.state.descrip,
                nota: this.state.nota,
                importe: parseFloat(this.state.importe, 10)*100, //CONVIERTO EL STRING importe EN NUMERO
                creadoAt: this.state.creadoAt.valueOf(), //USO FUNCION DE moment.js / timestamp
            })
        }
    };

    render () {
        return (
        <div>
            {/*Muestro error si es TRUE*/}
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Descripcion"
                    autoFocus
                    value={this.state.descrip}
                    onChange={this.onChangeDescrip}
                />
                <input
                    type="text"
                    placeholder="Importe"
                    value={this.state.importe}
                    onChange={this.onChangeImporte}
                />
                
                {/*https://github.com/airbnb/react-dates*/} 
                <SingleDatePicker 
                    //PROPS:
                    date= {this.state.creadoAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}

                    //SET PARA VER BOTON DE clear EN CALENDARIO, DEFAULT ES false
                    showClearDates = {() => {true}}
                    //SET PARA VER UN SOLO CALENDARIO LUEGO DE ELEGIR RANGO
                    numberOfMonths={1}
                    //SET PARA VER CALENDARIO DEL PASADO LUEGO DE ELEGIR RANGO
                    isOutsideRange={() => (false)}
                />
                
                <textarea
                    placeholder="Ingresar nota para el Gasto (opcional)"
                    value={this.state.nota}
                    onChange={this.onChangeNota}
                />
                <button>Agregar Gasto</button>
            </form>
        </div>
        )}
}