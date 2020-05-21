import React from 'react';

//conecto el componente al store
import { connect } from 'react-redux';

import ListaItemGasto from './ListaItemGasto';

//importo el selector para renderear datos en orden, pongo el nombre q quiera
import selectedGastos from '../selectors/gastos';
/*Cuando mapeo el objeto gastos, este ya trae el estado del store tanto gastos como filters */

/** STATELESS FUNCTIONAL COMPONENT:
    *MAPEO EL ARRAY DE OBJ
    *Por cada objeto dentro de gastos, devuelvo una instancia del componente <ListaItemGasto />
    *paso el key, y con ...gasto envio todas las props (SPREAD) a
    *ListaItemGasto, de manera de no usar props.descripcion x ej
*/
export const ListaGasto = (props) => (
    <div>
        {
            props.gastos.length === 0 ? (
                <h2>Sin Gastos</h2>
            ) : (
                props.gastos.map((gasto) => {
                    return <ListaItemGasto key={gasto.id} {...gasto}/>
                })
            )
        }

    </div>
);

//MAPEO EL store state A props DEL COMPONENTE:
const mapStatetProp = (state) => {
    return {
        gastos: selectedGastos(state.gastos, state.filters)
    };
};

export default connect(mapStatetProp)(ListaGasto);