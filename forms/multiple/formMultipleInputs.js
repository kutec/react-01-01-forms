import React, { Component } from 'react';
import render from 'react-dom';

export default class MovieTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBooked: true,
      totalBookings: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log('MULTIPLE Inputs: ', this.state);

    // var state = {};
    // state[name] = value; OR state.name = value
    // this.setState(state);
  }

  render() {
    return (
      <form>
        <br />
        <br />
        <p>MULTIPLE Inputs:</p>
        <label>
          Has Booked:
          <input
            name="hasBooked"
            type="checkbox"
            checked={this.state.hasBooked}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Total Bookings:
          <input
            name="totalBookings"
            type="number"
            value={this.state.totalBookings}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}