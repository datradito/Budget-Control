//Reducer Gastos

//Variables DEFAULT
//el default es un array, no un obj individual.
const gastosReducerDefault = [];

export default (state = gastosReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_GASTO':
        //ES6 spread
        //[...state, {}] --->> el spread crea un nuevo array en memoria con el AGREGADO del objeto q envia dispatch(action), NO SE MODIFICA EL STATE!
            return [
                ...state,
                action.gasto
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
            //mapeo todas las props del obj gastos
            return state.map((gasto) => {
                //si encuentro el id a modificar
                if (gasto.id === action.id) {
                    //Entonces hago OBJ SPREAD OPERATOR para devolver el obj modificado
                    return {
                        ...gasto,
                        ...action.updates
                    };
                } else {
                    return gasto;
                };
            });

        default:
            return state;
    }
};