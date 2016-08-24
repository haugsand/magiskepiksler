import React from 'react'
import {Link, browserHistory} from 'react-router'

const Next = React.createClass({

    url: function() {
        let id = this.props.id + 1
        return '/design/' + id
    },

    handleNext: function(e) {
        if (e.keyCode == '39') { // Right-key
            browserHistory.push(this.url())
        }
    },

    componentDidMount: function() {
        window.addEventListener('keydown', this.handleNext);
    },

    componentWillUnmount: function() {
        window.removeEventListener('keydown', this.handleNext);
    },

    render: function() {
        return (
            <Link to={this.url()} className="next-design">
                <svg width="13" height="20" viewBox="0 0 13 20">
                  <polygon fill="#fff" fill-rule="evenodd" points="2.94 0 .59 2.35 8.223 10 .59 17.65 2.94 20 12.94 10"/>
                </svg>
            </Link>
        )
    }
})

export default Next