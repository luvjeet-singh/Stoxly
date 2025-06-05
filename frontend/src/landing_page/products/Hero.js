import React from "react";

function Hero() {
  return (
    <div className="container mt-5 p-5 border-bottom">
      <div className="text-center">
        <h1>Zerodha Products</h1>
        <h4 className="text-muted mt-3 mb-4">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="mb-5">
          Check out our{" "}
          <a className="anchor" href="">
            investment offerings
            <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
