import React from 'react';

import Modal from './Modal';

class DesignDetail extends React.Component {
    render() {
        return (
        	<Modal>
                <h2>Snippet item: {this.props.params.designId}</h2>
            </Modal>
        )
    }
}

export default DesignDetail;