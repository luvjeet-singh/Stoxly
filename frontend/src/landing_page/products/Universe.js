import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img
            style={{ width: "60%" }}
            src="media\images\zerodhaFundhouse.png"
          />
          <p className="universe-text text-muted p-3 fw-semibold">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{ width: "60%" }} src="media\images\sensibullLogo.svg" />
          <p className="universe-text text-muted p-3 fw-semibold">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{ width: "50%" }} src="media\images\streakLogo.png" />
          <p className="universe-text text-muted p-3 fw-semibold">
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3">
          <img style={{ width: "50%" }} src="media\images\goldenpiLogo.png" />
          <p className="universe-text text-muted p-3 fw-semibold">
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" />
          <p className="universe-text text-muted p-3 fw-semibold">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{ width: "40%" }} src="media\images\dittoLogo.png" />
          <p className="universe-text text-muted p-3 fw-semibold">
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-3 mb-5"
          style={{ width: "23%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
