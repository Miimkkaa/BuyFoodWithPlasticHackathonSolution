import React from "react";

const Receipt = ({ product, amount, price, total }) => {
  return (
    <article className="receipt" style={{ padding: "3rem" }}>
      <div className="labels">
        <h3>Product </h3>
        <h3>Amount </h3>
        <h3>Price </h3>
        <h3>Total </h3>
      </div>
      <li className="listitem" style={{ padding: "1rem 0rem" }}>
        <div>{product}</div>
        <div>{amount}</div>
        <div>${price}</div>
        <div>${total}</div>
      </li>
      <div
        className="totalPrices"
        style={{ paddingLeft: "0rem", paddingRight: "0rem" }}
      >
        <h4>Total:</h4>
        <h4>$1500</h4>
      </div>
    </article>
  );
};

export default Receipt;
