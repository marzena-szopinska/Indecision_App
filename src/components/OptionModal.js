import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    // props.selectedOption will return either undefined or a string, to change it into true booleans (boolean value insted) we need to use '!!'
    // !!'true' converts into true and !!undefined into false 
    return (
        <Modal isOpen={!!props.selectedOption} contentLabel='Selected Option'>
            <h3>Selected Option</h3>
        </Modal>
    );
};

export default OptionModal;