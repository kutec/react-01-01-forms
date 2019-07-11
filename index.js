import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import FormNormalInput from './forms/input/formNormalInput';
import FormReactInput from './forms/input/formReactInput';

import FormNormalTextarea from './forms/textarea/formNormalTextarea';
import FormReactTextarea from './forms/textarea/formReactTextarea';

import MovieTicket from './forms/multiple/formMultipleInputs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Forms',
      img: ''
    };
  }

  loadValidation = () => {
    console.log('loaded')
    this.setState({ img: 'https://bit.ly/2LNjTK9' });
    console.log(this.state.img);
  }

  render() {
    return (
      <div>
        <h1>React - {this.state.name}</h1>

        <FormNormalInput />
        <FormReactInput />

        <FormNormalTextarea />
        <FormReactTextarea />

        <MovieTicket />

        <br />
        <br />
        <button onClick={this.loadValidation} >load Validation</button>
        {
          this.loadValidation &&
          <a href="https://stackblitz.com/edit/react-01-01-rochak" target="_blank">
            <img id="validationHere" src={this.state.img} width="300" /></a>
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
