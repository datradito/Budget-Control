import React from 'react';
import ReactDOM from 'react-dom';

//HIGH ORDER COMPONENTS
//reusar code
//secuestro de render
//prop manipulation
//state abstracto

const Info = (props) => (
    <div>
        <h1>Detalle de Informacion</h1>
        <p>Informacion es : {props.info}</p>
        {console.log('Auth:' , props.isAuth)}
    </div>
);

const conAlertaAdmin = (ComponentEnvuelto) => {
//HOC ComponentEnvuelto, renderea un componente
//{...props} spread de props para tener acceso a las props del componente a renderear
    return (props) => (
        <div>

            {props.isAuth && <h1>USUARIO ADMINISTRADOR</h1>}
            {props.isAuth && <p>ESTA INFORMACION ES SOLO PARA ADMINS</p>}
            
            <ComponentEnvuelto {...props} /> 
        </div>
    );
};

//Aca le envio al componente requiereAuthInfo una prop q es el componente Info, el q estoy wrapeando
const requiereAuthInfo = (ComponentEnvuelto) => {
    return (props) => (
        <div>
            { props.isAuth ? 
            (//render si true
                <div>
                    <p>Usuario con Login</p>
                    {/*SPREAD PROPS*/}
                    <ComponentEnvuelto {...props}/>
                </div>   
            ) 
            //render si false
            : <p>Por favor realice Login</p>}
        </div>
    );
};

const AdminInfo = conAlertaAdmin(Info);
const AuthInfo = requiereAuthInfo(Info);

ReactDOM.render(<AdminInfo isAuth={true} info="Informacion Publica" />,document.getElementById('app'));