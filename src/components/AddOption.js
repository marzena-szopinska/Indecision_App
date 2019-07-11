import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    };
  
    handleAddOption = (e) => {
      // prevent full page refresh
      e.preventDefault(); 
      // fetch the value typed, and remove all the leading spaces using trim (if there is any)
      const option = e.target.elements.option.value.trim();
      // pass an option and check for error
      const error = this.props.handleAddOption(option);
  
      this.setState(() => ({ error: error }));
  
      if(!error){
          // clear the input
          e.target.elements.option.value = '';
      }
  
    };
    
    render(){
      return (
        <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
          <form className='add-option' onSubmit={this.handleAddOption}>
              <input className='add-option__input' type='text' name='option' />
              <button className='button'>Add Option</button>
          </form>
        </div>
      );
    }
  }

  export default AddOption;