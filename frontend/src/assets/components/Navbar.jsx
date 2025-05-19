import React from "react";
import { Link } from "react-router";
import { CiUser, CiShoppingBasket } from "react-icons/ci";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const counter = useSelector((state) => state.basket.items);
  console.log(counter);

  const countNumber = counter.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );
  return (
    <div className="container-custom">
      <div className="navbar">
        <div className="logo">
          <h1>Logo Name</h1>
        </div>
        <nav>
          <ul className="wrapper">
            <li>
              <Link to="/basket"> 
                <CiShoppingBasket />
                <sup>{countNumber}</sup>
              </Link>
            </li>
            <li>
              <Link to="/admin">
                <CiUser />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
