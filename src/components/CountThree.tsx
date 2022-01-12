import React from 'react';
import useCountReducer from "../hooks/useCountReducer";

export const CountThree: React.FC = () => {
  let {state, dispatch} = useCountReducer()

  return (
    <div>
      Count Hook  : {state.count}
      <br/>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}
