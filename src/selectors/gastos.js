import moment from 'moment';

//Envio Gastos filtrados a la consola
//gastos(obj gastos, obj filters)
//obj filters : {text, sortBy, fechaInicio, fechaFin} 

export default (gastos, { text, sortBy, fechaInicio, fechaFin}) => {
    //.filter() devuelve un array con los match q dieron true para cada filtro:fechaInicioMatch, fechaFinMatch, textMatch.
    return gastos.filter((gasto) => {
        //Logica para filtrar dentro de fechaInicio-fechaFin
        const creadoAtMoment = moment(gasto.creadoAt);
        const fechaInicioMatch = fechaInicio ? fechaInicio.isSameOrBefore(creadoAtMoment, 'day') : true;            
        const fechaFinMatch = fechaFin ? fechaFin.isSameOrAfter(creadoAtMoment, 'day') : true;
        //filtro la descripcion si text esta incluida en la cadena , ver .includes()
        const textMatch = gasto.descrip.toLowerCase().includes(text.toLowerCase());

        return fechaInicioMatch && fechaFinMatch && textMatch;
        //ordeno por fecha de menor a mayor, e importe de mayor a menor. Ver  array.sort()
    }).sort((a, b ) => {
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

