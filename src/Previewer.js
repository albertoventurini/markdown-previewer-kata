import React, { Component } from 'react';
import marked from 'marked';

export default class Previewer extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: marked(this.props.markdown)}}>
      </div>
    );
  }
}
