import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col mt-5 p-5">
          <h1 className="mt-4">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <a className="anchor" href={learnMore}>
            Learn More
            <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
