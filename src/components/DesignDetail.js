import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router'

import Modal from './Modal';


const DesignDetail = React.createClass({

    render: function() {

        const id = this.props.params.designId;
        const design = this.props.design[id - 1];

        const previous = function (array) {
            if (id > 1) {
                const previous = parseInt(id) - 1;

                return (
                    <Link to={`/design/${previous}`}>
                        Previous
                    </Link> 
                );               
            }
        };

        const next = function (array) {
            if (id < array.length) {
                const next = parseInt(id) + 1;

                return (
                    <Link to={`/design/${next}`}>
                        Next
                    </Link> 
                );               
            }
        };

        return (
            <Modal>
                <h2>Snippet item: {design.id}</h2>
                <p>{design.title}</p>
                <p>{design.img}</p>
                <p>{previous(this.props.design)} 
                {next(this.props.design)}</p>
            </Modal>
        );
    }
});


function mapStateToProps(store) {
  return {
    design: store
  }
}


export default connect(
  mapStateToProps
)(DesignDetail)


