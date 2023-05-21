import React, { Component } from 'react';
import Modal from './Modal/Modal';

// #########################################

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      state: { showModal },
      toggleModal,
    } = this;

    return (
      <div>
        <button type="button" onClick={toggleModal}>
          Open modal
        </button>

        {showModal && (
          <Modal onClose={toggleModal}>
            <h1>Title</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum in
              sint dolorum, architecto ad nostrum sit unde, nemo ullam maiores
              blanditiis mollitia quo sapiente et excepturi. In quas omnis nam?
            </p>
            <button type="button" onClick={toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
