import React from 'react';
import classes from './BackDrop.css';

const Backdrop = (props) => {
  return (
    <div 
    onClick={props.onClose}
      className={`modal-backdrop fade show ${classes.backdrop}`}>
      </div>
  );
};


export default Backdrop;
