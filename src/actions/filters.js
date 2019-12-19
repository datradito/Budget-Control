//SET_TEXT_FILTER
export const setTextFilter = (  text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text

});

//SORT_BY_DATE
export const sortByFecha = ( sortBy = 'date') => ({
    type: 'SORT_BY_DATE',
    sortBy
});

//SORT_BY_AMOUNT
export const sortByImporte = ( sortBy = 'amount') => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
});

//SET_FECHA_INICIO
export const setFechaInicio = ( fechaInicio ) => ({
    type: 'SET_FECHA_INICIO',
    fechaInicio
});

//SET_FECHA_FIN
export const setFechaFin = ( fechaFin ) => ({
    type: 'SET_FECHA_FIN',
    fechaFin
});