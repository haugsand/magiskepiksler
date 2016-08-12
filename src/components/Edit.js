import React from 'react';

import store from '../state/store';


const Edit = React.createClass({

    getInitialState: function() {
        return {id: this.getNewId(), title: ''};
    },

    getNewId: function() {
        let id = store.getState().length + 1;
        return id;
    },

    handleIdChange: function(e) {
        this.setState({id: e.target.value});
    },

    handleTitleChange: function(e) {
        this.setState({title: e.target.value});
    },

    handleSubmit: function(e) {
        e.preventDefault();
        store.dispatch({
            type: 'ADD_DESIGN',
            design: {
                id: this.state.id,
                title: this.state.title
            }
        });
        this.setState({id: this.getNewId(), title: ''});
    },

    render: function() {

        return (
            <section>
                <h2>Legg til nytt design</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>Id 
                        <input type="text" disabled="disabled" value={this.state.id} onChange={this.handleIdChange} />
                    </label>
                    <label>Tittel 
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                    </label>
                    <input type="submit" value="Legg til design" />
                </form>
            </section>
        );
    }
});

export default Edit;