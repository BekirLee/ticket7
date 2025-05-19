import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusBtn, plusBtn, removeBasket } from "../features/Basket";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.items);
  console.log(basketItems);

  const dispatch = useDispatch();

  return (
    <>
      {basketItems.map((item) => (
        <div className="card" key={item._id}>
          <div className="card-image">
            <img src={item.image} alt="" />
          </div>
          <div className="card-body">
            <p>{item.name}</p>
            <p>Adet: {item.count}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeBasket(item))}
            >
              delete
            </button>

            <button
              className="btn btn-danger"
              onClick={() => dispatch(plusBtn(item))}
            >
              plus
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(minusBtn(item))}
            >
              minus
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Basket;
