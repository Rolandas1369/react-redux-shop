// loads empty array list
const initialState = {
  books: []
};
// on reducer as action BOOKS_LOADED gets loaded data
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return { books: action.payload };
    default:
      return state;
  }
};

export default reducer;
