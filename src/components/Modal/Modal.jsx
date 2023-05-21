import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  //
  // КОД НИЖЧЕ "ПОСЛІВНО" ВІДПОВІДАЄ КОДУ РЕПЕТИ З ВІДЕО:
  // https://youtu.be/rKzrg6N8qco?t=2250

  // ############################################################
  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        console.log('Escape pressed');

        this.props.onClose();
      }
    });
  }
  // ############################################################
  // (УСЕ, ЩО БУЛО ДАЛІ, ПОКИ ЩО ЗАКОМЕНТОВАНЕ)

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeydown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeydown);
  // }

  // handleKeydown = event => {
  //   if (event.code === 'Escape') {
  //     console.log('Escape pressed');

  //     this.props.onClose();
  //   }
  // };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  // componentDidUpdate(prevProps, prevState) {}

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
