import React from 'react';

import Header from './Header';
import DesignGrid from './DesignGrid';
import Modal from './Modal';

const Main = React.createClass({

    render: function() {

        return (
        	<main>
                <Header />
                <DesignGrid />

                <Modal>
                	{this.props.children}
                </Modal>
            </main>
        )

    }

});

export default Main;