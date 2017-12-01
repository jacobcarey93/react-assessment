import React from 'react';
import AuthView from '../src/components/AuthView/AuthView';
import BrowsingView from '../src/components/BrowsingView/BrowsingView';
import BookDetailsView from '../src/components/BookDetailsView/BookDetailsView';
import EditBookView from '../src/components/EditBookView/EditBookView';
import AddBookView from '../src/components/AddBookView/AddBookView';
import CartView from '../src/components/CartView/CartView';
import BookshelfView from '../src/components/BookshelfView/BookshelfView';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default(

    <Router>
        <div>
            <Route exact path='/' component={AuthView} />
            <Route path='/browsing' component={BrowsingView} />
            <Route path='/details/:id' component={BookDetailsView} />
            <Route path='/edit/:id' component={EditBookView} />
            <Route path='/addbook' component={AddBookView} />
            <Route path='/cart' component={CartView} />
            <Route path='/bookshelf' component={BookshelfView} />
        </div>
    </Router>
)