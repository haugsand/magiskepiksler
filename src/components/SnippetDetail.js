import React from 'react';

class SnippetDetail extends React.Component {
    render() {
        return (
            <h2>Snippet item: {this.props.params.snippetId}</h2>
        )
    }
}

export default SnippetDetail;