import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './BackDrop'; // Import the Backdrop component

const ModalOverlay = (props) => {
  return (
      <div className='modal d-inline'>
      <div className="modal-dialog">
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </div>
  );
};


const portalElements = document.getElementById('cartModal');

const CartModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElements)}
      <div>
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
      </div>
    </>
  );
};

export default CartModal;
