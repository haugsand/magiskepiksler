import React from 'react'
import {Link} from 'react-router'

const Next = props =>  {

    let link

    if (props.id < props.length) {
        link = <Link to={`/design/${props.id + 1}`}>Neste</Link>
    } 

    return (
        <div className="next-design">
            {link}
        </div>
    )
}

export default Next