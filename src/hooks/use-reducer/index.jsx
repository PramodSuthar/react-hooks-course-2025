import { useReducer, useState } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'double':
            return {count: state.count * 2}
        case 'half':
            return {count: state.count / 2}
    }
};


export const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});


  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({type: "increment"})}>Increase</button>
      <button onClick={() => dispatch({type: "decrement"})}>Decrease</button>
      <button onClick={() => dispatch({type: "double"})}>Double</button>
      <button onClick={() => dispatch({type: "half"})}>Half</button>
    </div>
  );
};