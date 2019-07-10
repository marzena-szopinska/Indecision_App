import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

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
            options: []
        };
    }

    componentDidMount() {
      // catch an error if the json data that has been passed in is not valid
      try {
        // fetching data from the local storage
        // get the data and store it in json variable
        const json = localStorage.getItem('options');
        // convert string into javascript array
        const options = JSON.parse(json);
        // set state if options is not null
        if(options){
          this.setState(() => ({ options: options })); // or shortcut this.setState(() => ({ options }));
        }
      } catch(e) {
        // Do nothing at all - fall back to the empty array which is the default value
      }
    }

    componentDidUpdate(prevProps, prevState) {
      // save data only if the state length actually changes (so if the state doeasnt change there is no need to save the data)
      if(prevState.options.length !== this.state.options.length) {
        // take an object and convert it into string
        const json = JSON.stringify(this.state.options);
        // save string representation of options object into local storage - remember local storage works only with strings
        localStorage.setItem('options', json);
      }

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

export default IndecisionApp;