import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './pages/Layout.jsx';
import Todos from './components/Todos.jsx';
import Page2 from './components/Page2.jsx';
import Page3 from './components/Page3.jsx';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path="page2" component={Page2}></Route>
            <Route path="page3" component={Page3}></Route>
        </Route>
    </Router>,
    app);
