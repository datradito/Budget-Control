import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'; //genera id universales

//Acciones:
//ACTIONS GENERATORS
//ADD_GASTO - action generator
/* const funcAction =  ({} = {}) => ( {} ) */

const addGasto = (
{
    //destructuro el objeto gasto, e incluyo los defaults 
    descrip= '',
    note= '',
    importe= 0, //no uso decimales
    creadoAt= 0,

} = {}) 
=> ({
    type: 'ADD_GASTO',

    gastos: {
        //id generado auto by uuid@3.1.0
        id: uuid(),
        //key:value iguales entonces simplifico
        descrip,
        note,
        importe,
        creadoAt
    }
});

//REMOVE_GASTO
const removeGasto = ( { id } ) => ({
    type: 'REMOVE_GASTO',
    id

});

//EDIT_GASTO
//no asigno default xq sino no tengo id/updates no hago nada en el reducer
const editGasto = ( id, updates ) => ({
    type: 'EDIT_GASTO',
    id,
    updates //objeto con todas las modificaciones
});


//SET_TEXT_FILTER
const setTextFilter = (  text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text

});

//SORT_BY_DATE
const sortByFecha = ( sortBy = 'fecha') => ({
    type: 'SORT_BY_DATE',
    sortBy
});

//SORT_BY_AMOUNT
const sortByImporte = ( sortBy = 'importe') => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
});

//SET_FECHA_INICIO
const setFechaInicio = ( fechaInicio ) => ({
    type: 'SET_FECHA_INICIO',
    fechaInicio
});

//SET_FECHA_FIN
const setFechaFin = ( fechaFin ) => ({
    type: 'SET_FECHA_FIN',
    fechaFin
});



//Realizo un reducer para cada prop principal (gastos, filters)

//Variables DEFAULT
const gastosReducerDefault = [];

const filterReducerDefault = {
    text: '',
    sortBy: 'date',//typeof 'date' ? 'date':'number',
    fechaInicio: undefined,
    fechaFin: undefined,
};

//Reducer Gastos
//el default es un array, no un obj individual.
const gastosReducer = (state = gastosReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_GASTO':
        //ES6 spread
            return [
                //[...state, {}] --->> el spread crea un nuevo array en memoria con el AGREGADO del objeto q envia dispatch(action), NO SE MODIFICA EL STATE!
                ...state,
                action.gastos
            ]
 
        case 'REMOVE_GASTO':
            //DEVUELVO SOLO LOS ELEMENTOS DISTINTOS AL id pasado a removeGasto 
            /* 
                id!==id -->> son distintos los id¿?
                si true (son distintos) -->> sigo con el sgte item del array, no modifico nada
                si false (son iguales) -->> filtro el item, no lo incorporo al nuevo array.
            */
            return state.filter(({ id }) => id!== action.id);
            //IDEM
            /*return state.filter(({ id }) => {
                return id !== action.id
            }); */
        
        case 'EDIT_GASTO':
            //mapeo todas los obj del array gastos
            return state.map((gastos) => {
                //si encuentro el id a modificar
                if (gastos.id === action.id) {
                    //Entonces hago OBJ SPREAD OPERATOR para devolver el obj modificado
                    return {
                        ...gastos,
                        ...action.updates
                    };
                } else {
                    return gastos;
                };
            });

        default:
            return state;
    }
};

//Reducer Filter
const filterReducer = (state = filterReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
            
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: action.sortBy
            }

        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: action.sortBy
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

//Envio Gastos filtrados a la consola
const getGastosVisibles = (gastos, { text, sortBy, fechaInicio, fechaFin}) => {
    //.filter() devuelve un array con los match q dieron true para cada filtro:fechaInicioMatch, fechaFinMatch, textMatch.
    return gastos.filter((gasto) => {
        //Logica para filtrar dentro de fechaInicio-fechaFin
        const fechaInicioMatch = typeof fechaInicio !== 'number' || gasto.creadoAt >= fechaInicio;
        const fechaFinMatch = typeof fechaFin !== 'number' || gasto.creadoAt <= fechaFin;
    
        //filtro la descripcion si text esta incluida en la cadena, ver .includes()
        const textMatch = gasto.descrip.toLowerCase().includes(text.toLowerCase());


        return fechaInicioMatch && fechaFinMatch && textMatch;
        
    })//Ordeno por fecha de menor a mayor, e importe de mayor a menor. Ver  array.sort()
    .sort((a, b ) => { 
        //ordeno fecha
        if (sortBy === 'fecha') {
            return a.creadoAt < b.creadoAt ? 1 : -1; //ver compare en .sort()
        }
        //ordeno importe
        else if(sortBy === 'importe'){
             return a.importe < b.importe ? 1 : -1;
        }
    });
};




//Creo Store with combine
const store = createStore(combineReducers({
    //key (prop state) : value (reducer name)
    gastos: gastosReducer,
    filters: filterReducer,
    })
);

//suscribe() se llama cada vez que cambia el store
store.subscribe(() => {
    //Aqui dentro esta la logica para enviar los datos a la consola
    const state = store.getState(); //envio todo el obj a state
    const gastosVisibles = getGastosVisibles(state.gastos,state.filters); //llamo a getGastosVisibles() con el oj gastos y el obj filters que contiene todos los filtros
    //Envio a consola los datos previamente filtrados y ordenados por getGastosVisibles()
    console.log(gastosVisibles);
});


//Examples for dispatch(), you can comment/uncomment where ever you like...
const gasto1 = store.dispatch(addGasto({descrip:'Alquiler',importe:-50000, creadoAt:21000}));
const gasto2 = store.dispatch(addGasto({descrip:'Compra',importe:10050000, creadoAt:-1000}));

//store.dispatch(removeGasto( {id:gasto1.gastos.id}));
//store.dispatch(editGasto( gasto2.gastos.id , { importe:50 }));

//store.dispatch(setTextFilter('sdkhskfh'));
//store.dispatch(setTextFilter());

store.dispatch(sortByFecha()); //fecha
store.dispatch(sortByImporte()); //importe

//store.dispatch(setFechaInicio(0));
//store.dispatch(setFechaInicio());
//store.dispatch(setFechaFin(999));


//console.log(gasto1, gasto2);


//STATE OBJ
const demoState = {
    gastos: [{
        id: 'skdjhskdhskjh',
        descrip: 'alquiler Enero',
        note: 'Pago final del local',
        importe: 54000, //no uso decimales
        creadoAt: 0
    }],
    filters: {
        text: 'alquiler',
        sortBy: 'importe',  //fecha o importe
        fechaInicio: undefined,
        fechaFin: undefined,
    }
};

