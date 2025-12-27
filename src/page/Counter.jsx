import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  getDoubleCounter,
  getCounter,
} from "../redux/counterSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const doubleCounter = useSelector(getDoubleCounter);
  const tripleCounter = useSelector(state => getCounter(state, 3));

  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Double Counter: {doubleCounter}</h1>
      <h1>Triple Counter: {tripleCounter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
