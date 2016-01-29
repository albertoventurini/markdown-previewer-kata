import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {markdown: ''};
  }

  textChanged(text) {
    this.setState({markdown: text});
  }

  render() {
    return (
      <div>
        <div style={{float: 'left', width: '48%'}}>
          <Editor textChanged={this.textChanged.bind(this)} />
        </div>
        <div style={{float: 'right', width: '48%'}}>
          <Previewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}
