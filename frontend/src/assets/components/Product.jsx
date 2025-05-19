import React from "react";

const Product = ({ product }) => {
  return (
    <>
      {
        <div className="box">
          <div className="box-image">
            <img src={product.image} alt="" />
          </div>
          <div className="box-body">
            <div className="box-title">
              <h1>{product.name}</h1>
            </div>
            <div className="box-price">
              <strong>{product.price}$</strong>
            </div>
            <div className="box-desc">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Product;
