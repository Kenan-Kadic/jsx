// Import the React and ReactDom Libraries - goes into node_modules folder and imports these 2 folders
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component - a function or a class that produces html to show the user by
// using JSX and handles feedback from the user by using event handlers


const App = () => {
    
    const buttonText = { text: 'Click-Me'};
    const labelText = 'Enter Name:'

    return ( 
        <div>
            <label className="label" htmlFor= "name">
                { labelText }
            </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}   
            </button>
        </div>
    );
};

// Take the react componenta and show it on the screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
);