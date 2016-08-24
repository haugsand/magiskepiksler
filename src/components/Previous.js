import React from 'react'
import {Link, browserHistory} from 'react-router'

const Previous = React.createClass({

    url: function() {
        let id = this.props.id - 1
        return '/design/' + id
    },

    handlePrevious: function(e) {
        if (e.keyCode == '37') { // Left-key
            browserHistory.push(this.url())
        }
    },

    componentDidMount: function() {
        window.addEventListener('keydown', this.handlePrevious);
    },

    componentWillUnmount: function() {
        window.removeEventListener('keydown', this.handlePrevious);
    },

    render: function() {
        return (
            <Link to={this.url()} className="previous-design">
                <svg width="13" height="20" viewBox="0 0 13 20">
                  <polygon fill="#fff" fill-rule="evenodd" points="12.35 2.35 10 0 0 10 10 20 12.35 17.65 4.717 10"/>
                </svg>
            </Link>
        )
    }
})

export default Previous