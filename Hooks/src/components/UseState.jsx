import React, { useState } from 'react';

const UseState = () => {
  const [Counter, setCounter] = useState(0);
  const [Name, setName] = useState('');

  const Change = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setCounter(Counter + 1);
  };

  const decrement = () => {
    setCounter(Counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <input type="text" onChange={Change} />
      <h1>
        {' '}
        {Name}Counter : {Counter}
      </h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseState;
