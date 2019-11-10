import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import GastosDashboardPage from '../components/GastosDashboardPage';
import AddGastosPage from '../components/AddGastosPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import EditGastosPage from '../components/EditGastosPage';


const AppRouter = () => (
        //SOLO UN ELEMENTO DENTRO DE ESTE COMPONENTE X ESO EL <div>
        <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                    <Route path="/" component={GastosDashboardPage} exact = {true}/>  
                    <Route path="/crear" component={AddGastosPage}/>
                    <Route path="/edit/:id" component={EditGastosPage}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
