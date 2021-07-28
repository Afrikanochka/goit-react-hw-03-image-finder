import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../src/index.css';

class Modal extends Component {
  state = {
    modalItem: [],
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => e.code === 'Escape' && this.props.toggleModal();

  handleClick = e => e.target === e.currentTarget && this.props.toggleModal();

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img
            src={this.props.modalItem.largeImageURL}
            alt={this.props.modalItem.tags}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
