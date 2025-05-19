import React from "react";
import { useDispatch } from "react-redux";
import { addBasket, minusBtn, plusBtn } from "../features/Basket";
import { Link, useNavigate } from "react-router";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {
        <div className="box">
          <div className="box-image">
            <img
              src={product.image}
              alt=""
              onClick={() => navigate(`/details/${product._id}`)}
            />
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
            <div
              className="btn btnAddBasket"
              onClick={() => {
                dispatch(addBasket(product));
              }}
            >
              Add basket
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Product;
