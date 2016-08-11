import React from 'react';

import Header from './Header';

class Main extends React.Component {
    render() {
        return (
        	<main>
                <Header />
                {this.props.children}
            </main>
        )
    }
}

export default Main;