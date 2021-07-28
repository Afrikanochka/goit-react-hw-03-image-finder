import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import '../../../src/index.css';

const ImageGallery = ({ images, onSelect }) => (
  <ul className="ImageGallery">
    {images.map(image => {
      return <ImageGalleryItem key={image.id} {...image} onSelect={onSelect} />;
    })}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;
