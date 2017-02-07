import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './pages/Layout.jsx';
import Todos from './pages/Todos.jsx';
import Favorites from './pages/Favorites.jsx';
import Page3 from './components/Page3.jsx';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path="favorites" component={Favorites}></Route>
            <Route path="page3" component={Page3}></Route>
        </Route>
    </Router>,
    app);
