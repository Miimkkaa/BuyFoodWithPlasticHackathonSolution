import React, { useState, useEffect } from "react";
import firebaseConfig from "./Firebase";
import "firebase/firestore";
import Receipt from "./Receipt";

const GetReceipts = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    const db = firebaseConfig.firestore();
    return db.collection("spells").onSnapshot((snapshot) => {
      const productsData = [];
      snapshot.forEach((doc) =>
        productsData.push({ ...doc.data(), id: doc.id })
      );
      setReceipts(productsData);
      console.log(productsData);
    });
  }, []);

  return (
    <ul className="list">
      {receipts.map((receipt, index) => (
        <Receipt
          key={index}
          name={receipt.name}
          price={receipt.price}
          amount={receipt.amount}
          total={receipt.total}
        />
      ))}
    </ul>
  );
};

export default GetReceipts;
