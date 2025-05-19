import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  searchProducts,
  sortZA,
  sortAZ,
} from "../features/Products";
import Product from "./Product";

const Products = () => {
  const products = useSelector(
    (state) => state.products?.products || console.log("hello")
  );
  //   console.log(products);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleSearch = (e) => {
    let value = e.target.value;
    console.log(value);

    setSearch(value);
    dispatch(searchProducts(value));
  };

  return (
    <>
      <input type="text" value={search} onChange={handleSearch} />
      <button
        className="btn"
        onClick={() => {
          dispatch(sortAZ());
        }}
      >
        ZA
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(sortZA());
        }}
      >
        AZ
      </button>

      {products.length > 0 ? (
        products.map((item) => {
          return <Product key={item._id} product={item} />;
        })
      ) : (
        <p>No products found.</p>
      )}
    </>
  );
};

export default Products;
