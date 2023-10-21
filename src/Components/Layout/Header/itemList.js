import React from "react";
import AddBtn from "./AddBtn";

const items = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "$22.99",
  },
  {
    name: "Schnitzel",
    description: "A German specialty",
    price: "$16.50",
  },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "$12.99",
  },
];

const ItemList = () => {
  return (
    <div className="bg-white card mt-5 border rounded container">
      {items.map((item, index) => (
        <div className="d-flex card-body list-group" key={index}>
          <div className="d-flex justify-content-between align-items-center">
            <h3>{item.name}</h3>
            <div className="form-group d-flex align-items-center">
              Amount <input className=" form-control m-2 rounded w-25" placeholder="Quantity" type="number"/>
            </div>
          </div>
          <card className="d-flex  justify-content-between">{item.description}<AddBtn /></card>
          <h4 className="text-danger">{item.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
