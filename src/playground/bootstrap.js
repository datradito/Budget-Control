import React from 'react';
import { Button , FormControl } from 'react-bootstrap';


const IngresoDatos = () => {
    return (
        <div>
        <Button bsStyle="danger">Hello World Danger</Button>
        <Button bsStyle="primary">Hello World Primary</Button>
        <Button bsStyle="success">Hello World Success</Button>
    
  
        <FormControl
            type="text"
            placeholder="Enter text"        
        /> 

    </div>
    )
}

export default IngresoDatos;