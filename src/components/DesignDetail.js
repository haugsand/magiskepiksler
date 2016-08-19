import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router'

import Modal from './Modal';
import Next from './Next';
import Previous from './Previous';

const DesignDetail = props => {

    const id = props.params.designId;
    const design = props.design[id - 1];

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
            <Previous id={design.id} />
            <Next id={design.id} length={props.design.length} />
        </Modal>
    );

}


function mapStateToProps(store) {
  return {
    design: store
  }
}


export default connect(
  mapStateToProps
)(DesignDetail)


