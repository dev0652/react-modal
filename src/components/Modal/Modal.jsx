import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div className="Modal__backdrop">
        <div className="Modal__content">{this.props.children}</div>
      </div>
    );
  }
}
