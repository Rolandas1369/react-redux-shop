// action and reducers names good to be same na,e
// action creator
const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};


export { booksLoaded, booksRequested };
