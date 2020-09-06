import React from "react";
import { BookstoreComsumer } from "../bookstore-service-context";

const WithBookstoreServicer = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreComsumer>
        {(bookstoreService) => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreComsumer>
    );
  };
};

export default WithBookstoreServicer;
