import React from 'react';
import ReactDOM from 'react-dom';
//imports react from node_modules directory and gets all the code from inside.

const App = () => {
  return <div> Hello friend</div>
};

// shows react component on the screen with render by referencing root in index.html
ReactDOM.render(
  < App />, document.querySelector('#root')
);
