import React from 'react';

class DesignDetail extends React.Component {
    render() {
        return (
            <h2>Snippet item: {this.props.params.designId}</h2>
        )
    }
}

export default DesignDetail;