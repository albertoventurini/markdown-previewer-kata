import React, { Component } from 'react';

export default class Previewer extends Component {
  render() {
    return (
      <div>
        <h2>Previewer here</h2>
        <p>{this.props.markdown}</p>
      </div>
    );
  }
}
