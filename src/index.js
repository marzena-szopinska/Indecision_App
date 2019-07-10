import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        // bind this for handleDeleteOptions method
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        // bind this for handlePick method
        this.handlePick = this.handlePick.bind(this);
        // bind this for handleAddOption method
        this.handleAddOption = this.handleAddOption.bind(this);
        // bind this for handleDeleteOption method
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        // set up default state object
        this.state = {
            options: props.options
        };
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
          // merge a single item with options array using concat : concat(options) or concat([options])
          options: prevState.options.concat(option)}));
    }

    handleDeleteOptions() {
        // clean the options array
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove){
      this.setState((prevState) => ({
        // loop through options and filter out the option to remove
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
      }));
    }

    handlePick() {
        // get the random number
        const randNum = Math.floor(Math.random() * this.state.options.length);
        // pick the item with randomly generated index
        const pickedOption = this.state.options[randNum];
        // alert the option
        alert(pickedOption);
    }

    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
  options: []
};


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
// set default props if props arent provided
Header.defaultProps = {
  title: 'Indecision App'
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What Should I Do?</button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      { /* Render new option tag for each option inside the array, set the key and the text value */
          props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
      }
    </div>
  );
};


const Option = (props) => {
  return (
    <div>
        <p>{props.optionText}</p>
        <button onClick={() => props.handleDeleteOption(props.optionText)}>remove</button>
    </div>
  );
};


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

    // clear the input
    e.target.elements.option.value = '';
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

ReactDOM.render(<IndecisionApp options={['do shopping', 'clean the house']}/>, document.getElementById('root'));
