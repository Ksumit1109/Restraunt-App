import CartModal from "./CartModal";

const Cart = (props) => {
  const cartItems = (
    <ul className="modal-header ">
      {[{ id: "c1", name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li className="list-group-item fw-bolder fs-5">{item.name}</li>
      ))}
    </ul>
  );

  

  return (
    <CartModal onClose={props.onClose}>
       {cartItems}
      <div className="modal-body">
          <span className="fw-bolder fs-4">Total Amount</span>
          <span className="fw-bolder fs-4 float-end">35.62</span>
        </div>
        <div className="modal-footer">
          <button className="btn btn-outline-dark" onClick={props.onClose}>Close</button>
          <button className="btn btn-dark">Order</button>
        </div>
    </CartModal>
  );
};

export default Cart;