import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div className="shadow">
                <div className="modal">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;