import React from "react";

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
        <div className="card-body list-group" key={index}>
          <h3>{item.name}</h3>
          <p className="font-italic">{item.description}</p>
          <h4 className="text-danger">{item.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
