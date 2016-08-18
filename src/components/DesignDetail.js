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
                <h2>{design.title}</h2>
                <p>{design.id}</p>
                <p>{design.date}</p>
                <ul>
                {
                    design.pre.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
                </ul>

                <p>
                    <img src={design.img} alt="" />
                </p>
                <ul>
                {
                    design.post.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
                </ul>
                <ul>
                    <li>{previous(this.props.design)}</li>
                    <li>{next(this.props.design)}</li>
                </ul>
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


