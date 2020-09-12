import React, { Fragment } from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { title, author, price, CoverImage } = book;
  return (
    <div className="book-list-item">
      <Fragment>
        <div className="book-cover">
          <div className="cover-mage">
            <img src={CoverImage} alt="cover" />
          </div>
        </div>
        <div className="book-details">
          <span href="#" className="book-title">
            {title}
          </span>
          <div className="book-author">{author}</div>
          <div className="book-author">${price}</div>
          <button className="btn btn-info add-to-chart">Add to chart</button>
        </div>
      </Fragment>
    </div>
  );
};

export default BookListItem;
