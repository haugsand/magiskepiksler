import React from 'react';

import Nav from './Nav';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Magiske piksler</h1>
                <Nav />
            </header>
        )
    }
}

export default Header;