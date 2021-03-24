import React from "react";

const Receipt = ({ name, amount, price, total }) => {
  return (
    <article className="receipt">
      <div className="labels">
        <h3>Product </h3>
        <h3>Amount </h3>
        <h3>Price </h3>
        <h3>Total </h3>
      </div>
      <li className="listitem">
        <div>{name}</div>
        <div>{amount}</div>
        <div>${price}</div>
        <div>${total}</div>
      </li>
      <h3 className="totalPrices">Total: $150</h3>
    </article>
  );
};

export default Receipt;
