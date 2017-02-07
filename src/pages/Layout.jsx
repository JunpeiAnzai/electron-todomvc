import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {

    render() {

        return (
            <div>
                <h1>Layout</h1>

                {this.props.children}

                <Link to='/'>Todos </Link>
                <Link to='favorites'>Favorites </Link>
                <Link to='page3'>Show Page3 </Link>
            </div>
        );
    }
}

