import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectedGastos from '../selectors/gastos';
import totales_gastos from '../selectors/totales_gastos';

export const GastosSummary = ({gastosCount, gastosTotal}) => {
    const gastoWord = (gastosCount >= 2 ) ? 'gastos' : 'gasto';
    const format_gastoTotal = numeral( gastosTotal / 100 ).format('$0,0.00');
    
    return (
        <div>
            <h1>Viendo {gastosCount} {gastoWord} totalizando {format_gastoTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const gastoFiltrado = selectedGastos(state.gastos, state.filters);
    return {
        gastosCount: gastoFiltrado.length,
        gastosTotal: totales_gastos(gastoFiltrado)
    };
};

export default connect(mapStateToProps)(GastosSummary);

/**
 * ******************************************************
 * OTRA FORMA DE CONECTAR CON EL STORE Y MANEJAR EL STATE
 * ******************************************************
 * 
 * export const GastosSummary = (props) => (
    <div>
        <h1>Total de gasto: {props.gastos.length}</h1>
        <h1>Total importe:
            {(props.gastos
                .map((gasto) => gasto.importe)
                .reduce((sum, value) => (sum + value), 0))/100
            }
        </h1>
    </div>
);

const mapStateToProps = (state) => {
    return {
        gastos: selectedGastos(state.gastos, state.filters)
    };
};
 */