import React from 'react';
import {browserHistory} from 'react-router'

const Modal = React.createClass({

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