import uuid from 'uuid';

//EXPORTO POR NOMBRE, LUEGO ELIJO AL IMPORTAR
//ADD_GASTO - action generator
/* const funcAction =  ({} = {}) => ( {} ) */

export const addGasto =  ({
    //destructuro el objeto gasto, e incluyo los defaults 
    descrip = '',
    note = '',
    importe = 0,
    creadoAt = 0
} = {}) => ({
    type: 'ADD_GASTO',
    gasto: {
        id: uuid(),
             descrip,
             note,
             importe,
             creadoAt
    }
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


// //ACCION COMPATIBLE PARA ENVIAR CON THUNK
// export startAddGasto = ( ( gastoDato = {} ) => {
//     return (dispatch) => {
//         const {
//             descrip= '',
//             note= '',
//             importe= 0, //no uso decimales
//             creadoAt= 0,
//         } = gastoDato;
//         const gasto = { descrip, note, importe, creadoAt };

//         database.ref('gasto').push(gasto)
//         .then( (ref) => {
//             dispatch(addGasto({
//                 id: ref.key,
//                 ...gasto
//             }));
//         });
//     };
// });
