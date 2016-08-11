import React from 'react';
import {Link} from 'react-router'

class SnippetItem extends React.Component {
    render() {
        return (
            <li><Link to={`/snippet/${this.props.id}`} activeClassName="active">{this.props.title}</Link></li>
        )
    }
}

export default SnippetItem;