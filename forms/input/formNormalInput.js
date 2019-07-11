import React, { Component } from 'react';
import render from 'react-dom';

export default class FormNormalInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
 
    this.input = React.createRef();
  }

  render() {
    return (
      <div>
        <p>NORMAL Input: </p>
        <input type="text" name="textInput" ref={this.input} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange(event) {
    console.log('Normal Input: ' + this.input.current.value);
    event.preventDefault();
  }
}