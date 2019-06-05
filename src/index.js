import React from 'react';
import ReactDOM from 'react-dom';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {/* render paragraph only if subtitle exists */}
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? 'Here are your options' : 'No options to show'}
        <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ol>
    </div>
);

// practicing

// var templateTwo = (
//     <div>
//         <h1>Marzena Szopinska</h1>
//         <p>Age: 29</p>
//         <p>Location: Poland</p>
//     </div>
// );

// render the app
ReactDOM.render(template, document.getElementById('root'));
