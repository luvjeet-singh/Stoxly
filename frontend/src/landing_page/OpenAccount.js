import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="text-muted mt-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="p-2 btn btn-primary fs-5 mt-3 mb-5"
          style={{ width: "23%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
