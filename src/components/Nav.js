import React from 'react';
import {Link} from 'react-router'


class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/om" activeClassName="active">Hva er Magiske piksler?</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;