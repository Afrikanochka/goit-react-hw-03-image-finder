import React from 'react';
import PropTypes from 'prop-types';
import '../../../../src/index.css';

const ImageGalleryItem = ({ webformatURL, alt, onSelect, id }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={alt} onClick={() => onSelect(id)} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
  onSelect: PropTypes.func,
};

export default ImageGalleryItem;
