import React, { Component } from 'react';
import api from '../../services/api';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    showModal: false,
    modalProps: { url: '', alt: '' },
    status: 'idle',
  };
  render() {
    const { images, error, status, showModal } = this.state;
    const { url, alt } = this.modalProps;

    return (
      <ul className="ImageGallery">
        {images.map(
          ({ id, webformatURL, tags, largeImageURL }) => 9,
          //     <ImageGalleryItem
          //     key={id}
          //     src={webformatURL}
          //     url={largeImageURL}
          //     alt={tags}
          //     openModal={this.handleImgClick}
          //   />
        )}
      </ul>
    );
  }
}

export default ImageGallery;
