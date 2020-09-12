import React, { Component } from "react";
import BookListItem from "../book-list-item";
import Spinner from '../spinner/Spinner';
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested } from "../../actions"; 
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested  } = this.props;
    booksRequested()
    bookstoreService.getBooks().then(
      (data) => booksLoaded(data)
    )

    
    
    // forwards action to store
    
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />
    }

    return (

      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

// what state to use?answ books from stro
const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

//passes action/function
const mapDispatchToProps = {
  booksLoaded, booksRequested
};

// mounting store, reutrns new componenrn
// then book list is loaded state fromm store is [] after what this component is wrapped in connect 
// witch adds data to this component and return it with list of books 
export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
