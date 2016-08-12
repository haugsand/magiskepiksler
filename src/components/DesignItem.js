import React from 'react';
import {Link} from 'react-router'

class DesignItem extends React.Component {
    render() {
        return (
            <li><Link to={`/design/${this.props.id}`} activeClassName="active">{this.props.title}</Link></li>
        )
    }
}

export default DesignItem;