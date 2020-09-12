import React from "react";
import { Link } from "react-router-dom";
import "./shop-header.css";

const ShopHeader = ({ numItem, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">
            ReStore
        </div>
      </Link>
      <Link to="/cart">
        <div className="shopping-chart">
            <i className="cart-icon fa fa-shopping-cart" />
            {numItem} items, total: {total}
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
