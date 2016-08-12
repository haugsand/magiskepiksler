import React from 'react';

import Header from './Header';
import DesignGrid from './DesignGrid';

class Main extends React.Component {
    render() {
        return (
        	<main>
                <Header />
                <DesignGrid />


                {this.props.children}
            </main>
        )
    }
}

export default Main;