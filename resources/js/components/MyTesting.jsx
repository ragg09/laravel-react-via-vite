import React from 'react'
import ReactDOM from 'react-dom';

function MyTesting() {
  return (
        <div>MyTesting</div>
  )
}

export default MyTesting

if (document.getElementById('mytesting')) {
    ReactDOM.render(<MyTesting />, document.getElementById('mytesting'));
}

