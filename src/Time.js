import React from 'react';
function getTime() {
  return (new Date()).toLocaleTimeString()
};

const Time = () => {
return ( <div> <h1>
  {getTime()};
  </h1>
  </div >
)
}


export default Time