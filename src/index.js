import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        // set up default state object
        this.state = {
            options: ['one', 'two', 'three']
        };
    }

    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick event');
  }

  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.handlePick}>What Should I Do?</button>
      </div>
    );
  }
}


class Options extends React.Component {
    constructor(props){
        super(props);
        // bind the method
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render(){
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        { /* Render new option tag for each option inside the array, set the key and the text value */
            this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
  handleAddOption(e) {
      // prevent full page refresh
    e.preventDefault(); 
    // fetch the value typed, and remove all the leading spaces using trim (if there is any)
    const option = e.target.elements.option.value.trim();
    // check for value
    if(option) {
        //this.props.options.push(option);
        alert(option);
    }
    // clear the input
    //e.target.elements.option.value = '';
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
            <input type='text' name='option' />
            <button>Add Option</button>
        </form>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////
class Counter extends React.Component {
    constructor(props){
        super(props);
        // bind methods
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMunusOne = this.handleMunusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMunusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleAddOne}>1+</button>
                <button onClick={this.handleMunusOne}>1-</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
