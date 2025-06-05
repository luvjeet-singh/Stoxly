import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col">
          <img src={imageUrl} />
        </div>
        <div className="col p-5 mx-5">
          <h1 className="mt-4">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <div className="mb-3">
            <a className="anchor" href={tryDemo}>
              Try Demo
              <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
            <a
              style={{ marginLeft: "3rem" }}
              className="anchor"
              href={learnMore}
            >
              Learn More
              <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a style={{ marginLeft: "1rem" }} href={appStore}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
