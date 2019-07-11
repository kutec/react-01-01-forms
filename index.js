import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import FormNormalInput from './forms/input/formNormalInput';
import FormReactInput from './forms/input/formReactInput';

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
        {/** comments
          <Hello name={this.state.name} />
         */}
        <h1>React - {this.state.name}</h1>

        <FormNormalInput />
        <FormReactInput />

        // 
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
