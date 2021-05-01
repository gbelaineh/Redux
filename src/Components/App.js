import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Actions';

const App = () => {
  const counter = useSelector((state) => state.counetrReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Counter {counter} </h1>
      <button type="button" onClick={() => dispatch(increment(2))}>+</button>
      <button type="button" onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3> Valuable Information </h3> : ''}
    </div>
  );
};

export default App;
