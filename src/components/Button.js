import React from 'react';
import './Button.css';

const Button = (props) => {
  const className = `button ${props.type}`
  return (
    <button className={className} onClick={props.handleClick}>
      {props.label}
    </button>
  );
};

export default Button;
