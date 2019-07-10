import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    construnctor(props){
        super(props);
        // bind methods
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMunusOne = this.handleMunusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }

    handleAddOne() {
        alert('handle add one');
    }

    handleMunusOne() {
        alert('handle minus one');
    }

    handleReset() {
        alert('handle reset');
    }
    render() {
        return (
            <div>
                <p>Count: </p>
                <button onClick={this.handleAddOne}>1+</button>
                <button onClick={this.handleMunusOne}>1-</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

  //ReactDOM.render(template, document.getElementById('root'));