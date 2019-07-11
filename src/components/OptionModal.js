import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    // props.selectedOption will return either undefined or a string, to change it into true booleans (boolean value insted) we need to use '!!'
    // !!'true' converts into true and !!undefined into false 
    return (
        <Modal isOpen={!!props.selectedOption} // set if modal should be open or closed at the begging of the program
         onRequestClose={props.handleModalClose} // when you click the background or esc key the modal will also close itself
         contentLabel='Selected Option' // set the label
         > 
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleModalClose}>Okay</button>
        </Modal>
    );
};

export default OptionModal;