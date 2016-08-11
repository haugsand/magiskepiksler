import React from 'react';

import SnippetItem from './SnippetItem';

let SnippetGrid = React.createClass({
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

    render: function() {
        var snippetItems = this.state.data.map(function(snippet) {
            return (
                <SnippetItem title={snippet.title} id={snippet.id} key={snippet.id} />
            );
        });

        return (
            <ul>
                {snippetItems}
            </ul>
        );
    }
});

export default SnippetGrid;