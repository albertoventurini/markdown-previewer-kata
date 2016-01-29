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
      <div style={{display: 'table', width: '100%'}}>
        <div style={{display: 'table-row'}}>
          <div style={{display: 'table-cell', width: '50%'}}>
            <Editor textChanged={this.textChanged.bind(this)} />
          </div>
          <div style={{display: 'table-cell', width: '50%'}}>
            <Previewer markdown={this.state.markdown} />
          </div>
        </div>
      </div>
    );
  }
}
