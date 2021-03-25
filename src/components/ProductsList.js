import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product";
import Loading from "./Loading";
import AddNewProduct from "./AddNewProduct";
import firebaseConfig from "./Firebase";
import "firebase/firestore";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [sumProduct, setSumProduct] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text && amount && price) {
      const product = {
        id: uuidv4(),
        text: text,
        amount: amount,
        price: price,
        sumProduct: sumProduct,
      };
      console.log("Submit the form");
      setProducts((p) => {
        return [...p, product];
      });
      setText("");
      setAmount("");
      setPrice("");
    } else {
      console.log("Empty values");
    }
  };

  const onRemove = (id) => {
    console.log("id", id);
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const onCreate = () => {
    const db = firebaseConfig.firestore();
    db.collection("receipts").add({
      name: text,
      amount: amount,
      price: price,
      total: sumProduct,
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="receipts-page">
      <div className="container">
        <h1 className="receipt-title">Add new receipt</h1>
        <AddNewProduct
          handleSubmit={handleSubmit}
          setText={setText}
          setAmount={setAmount}
          setPrice={setPrice}
          text={text}
          price={price}
          amount={amount}
          setSumProduct={setSumProduct}
        />
        <ul className="list">
          {products.map((product) => {
            return (
              <Product
                id={product.id}
                key={product.id}
                text={product.text}
                amount={product.amount}
                price={product.price}
                onRemove={onRemove}
                sumProduct={product.sumProduct}
              />
            );
          })}
        </ul>

        {products.length > 0 && (
          <article>
            <div className="totalPrices">
              <h4>Total</h4>
              <h4>$ 1500</h4>
            </div>
            <button className="receiptButton" type="submit" onClick={onCreate}>
              Submit Receipt
            </button>
          </article>
        )}
      </div>
      <Link to="/get-receipts" className="checkallButton">
        Check All Receipts
      </Link>
    </main>
  );
};

export default ProductsList;
