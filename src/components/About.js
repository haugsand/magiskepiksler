import React from 'react';
import Modal from './Modal';

class About extends React.Component {
    render() {
        return (
            <Modal>

                <h2 className="about__header">Hva er Magiske piksler?</h2>
                <p className="about__p">Magiske piksler er et forsøk på å bli en bedre designer, 
                gjennom jevnlig </p>
                <p className="about__p">Magiske piksler er et forsøk på å bli en bedre designer. </p>
            </Modal>
        )
    }
}

export default About;