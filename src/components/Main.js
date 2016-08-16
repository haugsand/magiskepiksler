import React from 'react';

import Header from './Header';
import DesignGrid from './DesignGrid';


const Main = React.createClass({

    render: function() {

        return (
            <main>
                <Header />
                <DesignGrid />

                {this.props.children}
            </main>
        )

    }

});

export default Main;