import React from 'react';
import ListaGasto from './ListaGasto';
import FiltrosListaGasto from './FiltrosListaGasto';
import GastosSummary from './GastosSummary';

const GastosDashboardPage = () => (
    <div>
        <GastosSummary />
        <FiltrosListaGasto />
        <ListaGasto />
    </div>

);

export default GastosDashboardPage;