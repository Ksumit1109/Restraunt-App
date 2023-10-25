import React from 'react';
import  ReactDOM  from 'react-dom';

const Backdrop = (props) => {
  return <div className=""></div>;
}

const ModalOverlay = (props) => {
  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

const portalElements = document.getElementById("cartModal")

const CartModal = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop/>,portalElements)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElements)}
    </>
  )
};

export default CartModal;




// <div className="modal" style={{ display: 'block' }}>
// <div className="modal-dialog">
//   <div className="modal-content">
//     <div className="modal-header">
//       {props.children}
//     </div>
//     <div className="modal-body">
//           <span className="fw-bolder fs-4">Total Amount</span>
//           <span className=" fw-bolder fs-4 float-end">35.62</span>
//       </div>
//     <div className='modal-footer'>
//         <AddBtn className="btn btn-outline-dark">Close</AddBtn>
//         <AddBtn className="addbtnstyle btn btn-dark">Order</AddBtn>
//       </div>
   
//   </div>
// </div>
// </div>