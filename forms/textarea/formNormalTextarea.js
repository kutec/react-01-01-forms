import React, { Component } from 'react';
import render from 'react-dom';

export default class FormNormalTextarea extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
 
    this.textarea = React.createRef();
  }

  render() {
    return (
      <div>
        <p>NORMAL Textarea: </p>
        <textarea type="text" name="textArea" ref={this.textarea} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange(event) {
    console.log('Normal Textarea: ' + this.textarea.current.value);
    event.preventDefault();
  }
}