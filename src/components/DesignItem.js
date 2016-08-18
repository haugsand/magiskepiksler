import React from 'react';
import {Link} from 'react-router'

class DesignItem extends React.Component {
    render() {
        return (
            <li className="design-grid__item" style={{backgroundImage: 'url(' + this.props.design.thumb + ')'}}>
            	<Link to={`/design/${this.props.design.id}`} activeClassName="active" className="design-grid__link">
            		<span className="design-grid__number">
            			{this.props.design.id}
            		</span>
        		</Link>
        	</li>
        )
    }
}

export default DesignItem;