import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    // props.selectedOption will return either undefined or a string, to change it into true booleans (boolean value insted) we need to use '!!'
    // !!'true' converts into true and !!undefined into false 
        <Modal isOpen={!!props.selectedOption} // set if modal should be open or closed at the begging of the program
         onRequestClose={props.handleModalClose} // when you click the background or esc key the modal will also close itself
         contentLabel='Selected Option' // set the label
         closeTimeoutMS={200}
         className='modal' // waiting time before ripping out the modal from the dom
         > 
            <h3 className='modal__title'>Selected Option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className='button' onClick={props.handleModalClose}>Okay</button>
        </Modal>
);


export default OptionModal;