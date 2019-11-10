import React from 'react';

export default class InputEcho extends Component {
    constructor (props) {
      super(props);
      this.state = {
        texto: '',
      };
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
      const texto = e.target.texto;
      this.setState({
        texto: value
      })
    };
    render () {
      return (
        <form>
          <input
            type='text'
            name='texto'
            value={this.state.texto}
            onChange={this.handleChange}
          />
        </form>
      );
    }
}