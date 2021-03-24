import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="landingPage">
      <Link to="/receipts" className="receiptButton">
        Receipts
      </Link>
    </main>
  );
};

export default LandingPage;
