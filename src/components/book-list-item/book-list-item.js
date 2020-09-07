import React, { Fragment } from "react";
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <div>
      <Fragment>
        <span>{title}</span>
        <span>{author}</span>
      </Fragment>
    </div>
  );
};

export default BookListItem;