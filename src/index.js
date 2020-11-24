import React from 'react';
import ReactDOM from 'react-dom';
//imports react from node_modules directory and gets all the code from inside.
function buttonTxt () {
  return 'Submit'
};
const App = () => {

  return (<div>
    <label className="label" for="name">Enter name:</label>
    <input id="name" type="text" />
    <button
      style={{
        backgroundColor: 'black',
        color: 'white'
      }}> {buttonTxt()}
    </button>
  </div>

  )
};

// shows react component on the screen with render
// by referencing root in index.html
ReactDOM.render(
  < App />, document.querySelector('#root')
);
