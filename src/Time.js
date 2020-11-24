import React from 'react';
function getTime() {
  return (new Date()).toLocaleTimeString()
};
// const theTimeIs = setTimeout(getTime(), 1000);
// this doesn't work wait for hooks
const Time = () => {
return ( <div> <h1>
  {getTime()};
  </h1>
  </div >
)
}


export default Time