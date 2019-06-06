import React from 'react';
import ReactDOM from 'react-dom';

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    // prevent page reload on submit
    e.preventDefault();
    // if there is an option, store it in a variable
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        // clean the input window
        e.target.elements.option.value = '';
        // rerender the app
        renderApp();
    }
};

const onRemoveAll = () => {
    // empty array
    app.options = [];
    // rerender the app
    renderApp();
};

const onMakeDecision = () => {
    const randNumber = Math.floor(Math.random() * app.options.length);
    const pickedOption = app.options[randNumber];
    alert(pickedOption);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {/* render paragraph only if subtitle exists */}
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? 'Here are your options' : 'No options to show'}
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                { /* render the options list */
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );
    
    
    // render the app
    ReactDOM.render(template, document.getElementById('root'));
};

renderApp();



