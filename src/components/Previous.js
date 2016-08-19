import React from 'react'
import {Link} from 'react-router'

const Previous = props =>  {

    let link

    if (props.id > 1) {
        link = <Link to={`/design/${props.id - 1}`}>Forrige</Link>
    } 

    return (
        <div className="previous-design">
            {link}
        </div>
    )
}


export default Previous