import React from 'react'
import {Link} from 'react-router'

const DesignItem = props =>  (
    <li className="design-grid__item">
        <Link to={`/design/${props.design.id}`} className="design-grid__link">
            <img src={props.design.thumb} alt="" className="design-grid__img" />
            <span className="design-grid__number">
                {props.design.id}
            </span>
        </Link>
    </li>
)

export default DesignItem