import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonTxt = 'Submit'
  return (<div>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text" />
    <button
      style={{
        backgroundColor: 'black',
        color: 'white'
      }}> {buttonTxt}
    </button>
  </div>

  )
};

export default App;
