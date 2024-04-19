/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, createContext, useContext } from "react";

// 1. Create a context
const CounterContext = createContext();

// 2. Create Parent Component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span> {children} </span>
    </CounterContext.Provider>
  );
}

// 3. Create Child Component to help Implementing the comon task
function Count() {
  const { count } = useContext(CounterContext);
  return <span> {count} </span>;
}

function Label({ children }) {
  return <span> {children} </span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}> {icon} </button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}> {icon} </button>;
}

// 4. Create Child Component as properties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
