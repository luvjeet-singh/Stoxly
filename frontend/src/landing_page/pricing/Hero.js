import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-bottom">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 p-3">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 mb-5 text-center">
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" style={{ width: "90%" }} />
          <h2 className="fs-3">Free equity delivery</h2>
          <h6 className="mt-3 lh-base text-muted">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </h6>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" style={{ width: "90%" }} />
          <h2 className="fs-3">Intraday and F&O trades</h2>
          <h6 className="mt-3 lh-base text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </h6>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" style={{ width: "90%" }} />
          <h2 className="fs-3">Free direct MF</h2>
          <h6 className="mt-3 lh-base  text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Hero;
