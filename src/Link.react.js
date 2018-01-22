import React, { Component } from 'react';

export default class Link extends Component {
  render() {
    return (
      <a
        href={this.props.page}
      >
      {this.props.page}
      </a>
    );
  }
}
