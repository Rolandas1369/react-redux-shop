import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Site read</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <button className="btn btn-success">
                <i className="fa fa-trash"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fa fa-plus-circle"></i>
              </button>
              <button className="btn btn-info">
                <i className="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">Total: $210</div>
    </div>
  );
};

export default ShoppingCartTable;
