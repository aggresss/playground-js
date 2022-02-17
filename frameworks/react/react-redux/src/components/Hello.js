import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ click, reset, message }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={click}>Click</button>
      &nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  )
}


Hello.propTypes = {
  click: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default Hello
