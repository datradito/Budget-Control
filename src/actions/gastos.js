import uuid from 'uuid';
import database from '../firebase/firebase';


//EXPORTO POR NOMBRE, LUEGO ELIJO AL IMPORTAR
//ADD_GASTO - action generator
/* const funcAction =  ({} = {}) => ( {} ) */

export const addGasto =  (gasto) => ({
    type: 'ADD_GASTO',
    gasto
});

//ACCION COMPATIBLE PARA ENVIAR CON THUNK
export const startAddGasto = (( gastoDato = {} ) => {
    return (dispatch) => {
        const {
            descrip= '',
            note= '',
            importe= 0, 
            creadoAt= 0,
        } = gastoDato;

        const gasto = { descrip, note, importe, creadoAt };

        return database.ref('gastos').push(gasto)
        //pasando ref tengo acceso al .key desde firebase
        .then((ref) => {
            dispatch(addGasto({
                id: ref.key,
                ...gasto
            }));
        });
    };
});

//REMOVE_GASTO
export const removeGasto = ( { id } ) => ({
        type: 'REMOVE_GASTO',
        id
    
    });
//EDIT_GASTO
//no asigno default xq sino no tengo id/updates no hago nada en el reducer
export const editGasto = ( id, updates ) => ({
        type: 'EDIT_GASTO',
        id,
        updates
    }
);
    


//CODIGO PARA thunk
// ( gasto ) => ({
//         type: 'ADD_GASTO',
//         //gasto
//         //QUITO OBJETO XQ PASO TODO A FIREBASE
//         gasto: {
//             //id generado auto by uuid@3.1.0
//             id: uuid(),
//             //key:value iguales entonces simplifico
//             descrip,
//             note,
//             importe,
//             creadoAt
//         }
//     });



