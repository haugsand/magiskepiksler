import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'

import Modal from './Modal'
import Next from './Next'
import Previous from './Previous'

const DesignDetail = props => {

    const id = props.params.designId
    const design = props.design[id - 1]

    let previous
    if (id > 1) {
        previous = <Previous id={design.id} />
    }

    let next
    if (id < props.design.length) {
        next = <Next id={design.id} />
    }

    return (
        <Modal>
        
            <div className="design-detail__header">
                <div className="design-detail__previous">
                    {previous}
                </div>
                <div>
                    <h2>{design.title}</h2>
                    <p className="design-detail__date">{design.date}</p>
                </div>
                <div className="design-detail__next">
                    {next}
                </div>
            </div>

            <img src={design.img} alt="" className="design-detail__image" />

            <div className="design-detail__footer">
                
                <dl className="design-detail__list">
                    <dt className="design-detail__listtitle">Vurdering av oppgaven</dt>
                    {
                        design.pre.map(function(item) {
                            return <dd key={item} className="design-detail__listitem">{item}</dd>
                        })
                    }
                </dl>

                <dl className="design-detail__list">
                    <dt className="design-detail__listtitle">Evaluering av resultatet</dt>
                    {
                        design.post.map(function(item) {
                            return <dd key={item} className="design-detail__listitem">{item}</dd>
                        })
                    }
                </dl>

            </div>

        </Modal>
    )

}


function mapStateToProps(store) {
  return {
    design: store
  }
}


export default connect(
  mapStateToProps
)(DesignDetail)


