import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//STATELESS FUNCTIONAL COMPONENT:
const ListaItemGasto = ({ id, descrip, importe, creadoAt}) => (
    <div>
        <Link to= {`/edit/${ id }`}>
            <h3>Descripcion: {descrip} </h3> 
        </Link>

        {/*como las props me vienen destructuradas no utilizo prop.importe x ej*/}
        <p> 
            Importe: {numeral(importe / 100).format('$0,0.00')} 
            - 
            Fecha: {moment(creadoAt).format('Do MMMM, YYYY')}</p>
        <p>ID: {id} </p>



    </div>
);

export default ListaItemGasto;

