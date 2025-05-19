import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProducts } from "../features/Products";
import { addBasket } from "../features/Basket";

const Details = () => {
  const { id } = useParams();
  const products = useSelector(
    (state) => state.products?.products || console.log("hello")
  );
  //   console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const detailProduct = products.find((product) => product._id === id);
  console.log(products);
  console.log(detailProduct);

  return (
    <>
      <div className="container-custom">
        <div className="card">
          <div className="card-image">
            <img
              src={detailProduct?.image}
              alt={detailProduct.name}
              width="200"
            />
          </div>
          <div className="card-body">
            <div className="card-title">
              <h2>{detailProduct?.name}</h2>
            </div>
            <p>{detailProduct?.description}</p>
            <p>${detailProduct?.price}</p>
            <div className="card-btn">
              <button
                className="btn btn-succes"
                onClick={() => dispatch(addBasket(detailProduct))}
              >
                Add basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
