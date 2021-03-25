import React, { useState, useEffect } from "react";
import firebaseConfig from "./Firebase";
import "firebase/firestore";
import Receipt from "./Receipt";
import { Link } from "react-router-dom";

const GetReceipts = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    const db = firebaseConfig.firestore();
    return db.collection("receipts").onSnapshot((snapshot) => {
      const productsData = [];
      snapshot.forEach((doc) =>
        productsData.push({ ...doc.data(), id: doc.id })
      );
      setReceipts(productsData);
      console.log(productsData);
    });
  }, []);

  return (
    <div className="container2">
      <h1>All Receipts</h1>
      <ul className="list">
        {receipts.map((receipt, index) => (
          <Receipt
            key={index}
            product={receipt.product}
            price={receipt.price}
            amount={receipt.amount}
            total={receipt.total}
          />
        ))}
      </ul>
      <Link
        to="/add-receipt"
        className="receiptButton"
        style={{ position: "relative" }}
      >
        Add a new Receipt
      </Link>
    </div>
  );
};

export default GetReceipts;
