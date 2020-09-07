import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions"; 
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    
    // forwards action to store
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
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
const mapStateToProps = ({ books }) => {
  return { books };
};

//passes action/function
const mapDispatchToProps = {
  booksLoaded
};

// mounting store, reutrns new componenrn
// then book list is loaded state fromm store is [] after what this component is wrapped in connect 
// witch adds data to this component and return it with list of books 
export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
