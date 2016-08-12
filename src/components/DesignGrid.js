import React from 'react';
import { connect } from 'react-redux'

import DesignItem from './DesignItem';

const DesignGrid = React.createClass({

/*
    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        fetch('/data.json')
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                this.setState({data: json})
            }.bind(this))
            .catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }, 
*/

    render: function() {
        var designItems = this.props.data.map(function(design) {
            return (
                <DesignItem title={design.title} id={design.id} img={design.img} key={design.id} />
            );
        });

        return (
            <ul className="design-grid">
                {designItems}
            </ul>
        );
    }
});

function mapStateToProps(store) {
  return {
    data: store
  }
}

export default connect(
  mapStateToProps
)(DesignGrid)

//export default DesignGrid;