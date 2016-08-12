import React from 'react';
import {Link} from 'react-router'

class DesignItem extends React.Component {
    render() {
        return (
            <li className="design-grid__item" style={{backgroundImage: 'url(' + this.props.img + ')'}}>
            	<Link to={`/design/${this.props.id}`} activeClassName="active" className="design-grid__link">
            		<span className="design-grid__number">
            			{this.props.id}
            		</span>
        		</Link>
        	</li>
        )
    }
}

export default DesignItem;