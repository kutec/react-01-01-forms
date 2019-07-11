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
      name: 'Forms'
    };
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
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
