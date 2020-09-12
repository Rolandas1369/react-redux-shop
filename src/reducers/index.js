// loads empty array list
const initialState = {
  books: [],
  loading: true
};
// on reducer as action BOOKS_LOADED gets loaded data
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return { 
        books: action.payload,
        loading: false
      };
    case "BOOKS_REQUESTED":
      return {
        books: [],
        loading: true
      }
    default:
      return state;
  }
};

export default reducer;
