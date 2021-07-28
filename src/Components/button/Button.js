import React from 'react';
import '../../../src/index.css';

const Button = ({ title, onClick }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
