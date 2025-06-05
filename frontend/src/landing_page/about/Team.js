import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row border-top">
        <h1 className="fs-2 text-center mt-5">People</h1>
      </div>

      <div className="about-hero row p-5">
        <div className="col-6 p-5 text-muted text-center">
          <img className="about-team-img" src="media/images/nithinKamath.jpg" />
          <div className="about-team-h4">
            <h4 className="mt-4">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
        </div>
        <div className="col-6 p-5 mt-2">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a className="anchor" href="">
              Homepage
            </a>{" "}
            /{" "}
            <a className="anchor" href="">
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="anchor" href="">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
