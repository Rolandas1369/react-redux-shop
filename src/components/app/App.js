// import React, { Component } from "react";
// import "./app.css";
// import { withBookstoreService } from '../hoc';

// const App = ({ bookstoreService }) => {
//   console.log(bookstoreService.getBooks())
//     return <div>App</div>;
// };

// export default withBookstoreService()(App);

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import { HomePage, CartPage } from "../pages";
import ShopHeader from '../shop-header/shop-header';

const App = () => { 
  return (
    <main role="main" className="container">
      <ShopHeader numItem={5} total={210}/>
      <Switch>
        {/* Component is passeble without <> */}
        <Route path="/" component={HomePage} exact />
        <Route path="/" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
