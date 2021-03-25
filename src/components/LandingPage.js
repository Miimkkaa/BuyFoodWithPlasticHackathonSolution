import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="landingPage">
      <Link
        to="/get-receipts"
        className="receiptButton"
        style={{ position: "fixed" }}
      >
        Receipts
      </Link>
      <iframe
        src="https://powerva.microsoft.com/webchat/bots/0b16a39a-e781-468e-8b02-6b74e2102fa5"
        frameborder="0"
        className="bot"
        style={{
          position: "flex",
          marginLeft: "auto",
          marginTop: "auto",
          width: "20%",
          height: "40%",
          padding: "30px",
        }}
      ></iframe>
      ;
    </main>
  );
};

export default LandingPage;
