import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

export default class App extends Component {
  render() {
    return (
      <div style={{display: 'table', width: '100%'}}>
        <div style={{display: 'table-row'}}>
          <div style={{display: 'table-cell', width: '50%'}}>
            <Editor />
          </div>
          <div style={{display: 'table-cell', width: '50%'}}>
            <Previewer />
          </div>
        </div>
      </div>
    );
  }
}
