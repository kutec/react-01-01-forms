import React, { Component } from 'react';
import render from 'react-dom';

export default class FormReactTextarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <p>REACT Textarea: </p>
        <textarea value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }

  // handleChange(event) {
  //   console.log('Normal Textarea: ' + this.textarea.current.value);
  //   event.preventDefault();
  // }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log('REACT Textarea: ', this.state.value);
  }
}