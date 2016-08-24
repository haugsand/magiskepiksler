import React from 'react';
import {browserHistory} from 'react-router'

const Modal = React.createClass({

    handleClose: function(e) {
        if (e.keyCode == '27') { // Escape-key
            this.closeModal()
        }
    },

    componentDidMount: function() {
        window.addEventListener('keydown', this.handleClose);
    },

    componentWillUnmount: function() {
        window.removeEventListener('keydown', this.handleClose);
    },

    closeModal: function() {
        browserHistory.push('/');
    },

    render: function() {
        return (
            <div>
                <div className="shadow" onClick={this.closeModal}></div>
                <div className="modal">
                    {this.props.children}
                </div>
            </div>
        );
    }

});




export default Modal;