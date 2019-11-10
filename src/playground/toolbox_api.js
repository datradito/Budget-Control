import React, { Component } from 'react';
import axios from 'axios';

const TXT = 'PRUEBA'

export default class GetEcho extends React.Component{
  state = {
    texto: TXT,
    textoEcho: '',
  };

  // onInputChange (e) {
  //   this.setState({ texto: e.target.value });
  //   console.log('texto: ' + this.state.texto)
  // }

  onSubmit (e) {
    axios.get(' http://echo-serv.tbxnet.com/v1/echo',{
      params:{
          text: this.state.texto
      }
    })
    //console.log(text)    
    .then(res => {
      const text = res.data;
      //console.log(text);
      this.setState({textoEcho:res.data});
      console.log(this.state.textoEcho);
    })
  }

  render(){

    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" value={this.state.texto}  />
          <button type="submit">Enviar texto</button>
        </form>
        <p>Texto devuelto por API: {this.state.textoEcho}</p>
      </div>
    )
  }
}

//onChange={this.onInputChange.bind(this)}
  



    



    


