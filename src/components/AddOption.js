import React from 'react';

class AddOption extends React.Component {
    constructor(props){
      super(props);
      // bind this for handleAddOption method 
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
          error: undefined
      };
    }
  
    handleAddOption(e) {
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
  
    }
    render(){
      return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
              <input type='text' name='option' />
              <button>Add Option</button>
          </form>
        </div>
      );
    }
  }

  export default AddOption;