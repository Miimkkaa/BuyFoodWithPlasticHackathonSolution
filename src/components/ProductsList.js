import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product";
import Loading from "./Loading";
import AddNewProduct from "./AddNewProduct";
import firebaseConfig from "./Firebase";

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
    }, 800);
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

  const AddReceipt = () => {
    const db = firebaseConfig.firestore();
    // Here we just add the object into the database

    db.collection("spells").add({
      // title: movie.title,
      // vote_average: movie.vote_average,
      // poster_src: movie.poster_src,
      // userId: firebaseConfig.auth().currentUser.uid,
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
            <div className="totalPrices">Total: $1500{totalPrice}</div>
            <button
              className="receiptButton"
              type="submit"
              onSubmit={AddReceipt}
            >
              Submit Receipt
            </button>
          </article>
        )}
      </div>
    </main>
  );
};

export default ProductsList;
