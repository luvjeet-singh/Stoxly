import React from "react";
import AuthForm from "./AuthForm"; // Update import path as needed

function Signup() {
  return (
    <div className="container py-5">
      <div className="text-center my-5 pb-5">
        <h1 className="signupH1">
          Open a free demat and trading account online
        </h1>
        <h5 className="text-muted mt-3 mb-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h5>
      </div>

      <div className="row my-5">
        <div className="col-6">
          <img src="/media/images/account_open.svg" alt="Signup Visual" />
        </div>

        <div className="col-6">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

export default Signup;
