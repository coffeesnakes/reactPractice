import React from 'react';
import ReactDOM from 'react-dom';
import Time from './Time.js'
import App from './App.js'
import Header from './Image.js'
//imports react from node_modules directory and gets all the code from inside.

const Product = () => {
  return (<div>
    <Header />
    <App />
    <Time />
  </div>
  )
};

// shows react component on the screen with render
// by referencing root in index.html
ReactDOM.render(
  < Product />, document.querySelector('#root')
);
