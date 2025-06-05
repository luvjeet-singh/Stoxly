import React from "react";

function Hero() {
  return (
    <section className="container-fluid supportHero">
      <div className="container text-white">
        <div className="row ">
          <div className="col-7 py-5">
            <h5>Support Portal</h5>
            <h4 className="my-5">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded-0 hero-input"
                placeholder="Eg. how do I activate F&O, why is my order getting rejected ..."
              />
              <span className="input-group-text rounded-0 hero-icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>

            <div className="mb-5">
              <a href="" className="custom-underline">
                Track account opening
              </a>
              <a href="" className="custom-underline">
                Track segment activation
              </a>
              <a href="" className="custom-underline">
                Intraday margins
              </a>
              <a href="" className="custom-underline">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-5 py-4">
            <div className=" track-a">
              <a href="" className="custom-underline">
                Track tickets
              </a>
            </div>
            <div className=" hero-featured">
              <h4>Featured</h4>
              <ol>
                <li className="mb-4 mt-3">
                  <a href="" className="hero-underline2">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
                <li>
                  <a href="" className="hero-underline2">
                    Offer for sale (OFS) – May 2025
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
