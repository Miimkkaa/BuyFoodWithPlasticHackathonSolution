import React from "react";

const AddNewProduct = ({
  handleSubmit,
  setText,
  setAmount,
  setPrice,
  text,
  amount,
  price,
  setSumProduct,
}) => {
  const totalProduct = price * amount;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <div className="product-name">
          <label htmlFor="text" className="label">
            Product name
          </label>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="name"
          ></input>
        </div>
        <div className="product-name">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            className="amount"
          ></input>
        </div>
        <div className="product-name">
          <label htmlFor="price" className="label">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            className="amount"
          ></input>
        </div>
        <div className="product-name">
          <label htmlFor="sumProduct" className="label">
            Total
          </label>
          <input
            type="number"
            name="sumProduct"
            value={totalProduct}
            id="sumProduct"
            className="amount"
            readOnly
          ></input>
        </div>
        <button
          type="submit"
          className="button-add"
          onClick={() => setSumProduct(totalProduct)}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddNewProduct;
