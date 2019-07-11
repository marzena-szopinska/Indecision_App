import React from 'react';
import Option from './Option';

const Options = (props) => (
      <div>
        <button className='button--link' onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        { /* Render new option tag for each option inside the array, set the key and the text value */
            props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
        }
      </div>
);

  export default Options;