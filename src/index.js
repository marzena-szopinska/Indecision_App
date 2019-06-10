import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['one', 'two', 'three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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
  render() {
    return (
      <div>
        <button>What Should I Do?</button>
      </div>
    );
  }
}

// Render new p tag for each option, set the key and the value
class Options extends React.Component {
  render(){
    return (
      <div>
        {
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
  render(){
    return (
      <div>
        <p>AddOption component here!</p>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
