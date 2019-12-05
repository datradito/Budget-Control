import React from 'react';
import { Link } from 'react-router-dom';

//STATELESS FUNCTIONAL COMPONENT:
const ListaItemGasto = ({ id, descrip, importe, creadoAt}) => (
    <div>
        <Link to= {`/edit/${ id }`}>
            <h3>Descripcion: {descrip} </h3> 
        </Link>

        {/*como las props me vienen destructuradas no utilizo prop.importe x ej*/}
        <p> Importe: ${importe} - Fecha: {creadoAt} milisegundos</p>
        <p>ID: {id} </p>



    </div>
);

export default ListaItemGasto;

