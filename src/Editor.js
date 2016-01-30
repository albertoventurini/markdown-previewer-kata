import React, { Component } from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  textChanged(event) {
    var text = event.target.value;
    if(this.props.textChanged) {
      this.props.textChanged(text);
    }
    this.setState({text: text});
  }

  render() {
    return (
      <textarea value={this.state.text}
                style={{width: '100%', height: '400px'}}
                onChange={this.textChanged.bind(this)} />
    );
  }
}
