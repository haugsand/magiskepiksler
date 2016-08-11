import React from 'react';
import {Link} from 'react-router'


class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/" activeClassName="active">Hjem</Link></li>
                    <li><Link to="/bakgrunn" activeClassName="active">Bakgrunn</Link></li>
                    <li><Link to="/endre" activeClassName="active">Endre</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;