import React from "react";
// bookstore now wrapped in connect function what return new component
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";

export default function HomePage() {
   
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  ) 
}
