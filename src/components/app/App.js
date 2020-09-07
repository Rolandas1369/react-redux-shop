// import React, { Component } from "react";
// import "./app.css";
// import { withBookstoreService } from '../hoc';

// const App = ({ bookstoreService }) => {
//   console.log(bookstoreService.getBooks())
//     return <div>App</div>;
// };

// export default withBookstoreService()(App);

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <Switch>
      {/* Component is passeble without <> */}
      <Route path="/" component={HomePage} exact />
      <Route path="/" component={CartPage} />
    </Switch>
  );
};  

export default App;
