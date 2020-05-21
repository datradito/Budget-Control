import moment from 'moment';

//VER https://momentjs.com/

//Reducer Filter

//Variables DEFAULT
const filterReducerDefault = {
    text: '',
    sortBy: 'date',//typeof 'date' ? 'date':'number',
    //CONFIGURO PARA Q FECHA INICIO/FIN SEAN DENTRO DEL MES EN CURSO
    fechaInicio: moment().startOf('month'),
    fechaFin: moment().endOf('month'),
};


export default (state = filterReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
            
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }

        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }

        case 'SET_FECHA_INICIO':
            return{
                ...state,
                fechaInicio: action.fechaInicio
            }

        case 'SET_FECHA_FIN':
            return{
                ...state,
                fechaFin: action.fechaFin
            }            

        default:
            return state;
    }
};