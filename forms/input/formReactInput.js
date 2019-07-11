import React, { Component } from 'react';
import render from 'react-dom';

export default class FormReactInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    // this.input = React.createRef();
  }

  render() {
    return (
      <div>
        <p>REACT Input: </p>
        <input type="text" name="textInput" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }

  // handleChange(event) {
  //   console.log('REACT Input: ' + this.input.current.value);
  //   event.preventDefault();
  // }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('REACT Input: ', this.state.value);
  }
}