import ReactDom from "react-dom";
import React from "react";
// context for store
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/app";
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

import store from './store';
const bookstoreService = new BookstoreService();

ReactDom.render(
    // context from store
    <Provider store={store}>
        {/* erors cathcer */}
        <ErrorBoundry>
            {/* service for data feeding */}
            <BookstoreServiceProvider value={bookstoreService}>
                {/* routes */}
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>, 
document.getElementById("root"));
