import React from 'react';
import ListaGasto from './ListaGasto';
import FiltrosListaGasto from './FiltrosListaGasto'

const GastosDashboardPage = () => (
    <div>
        <FiltrosListaGasto />
        <ListaGasto />
    </div>

);

export default GastosDashboardPage;