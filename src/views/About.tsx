import React from 'react';
import {CountThree} from "../components/CountThree";
import {Counter} from "../components/Counter";

export const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
      <br/>
      <CountThree />
      <br/>
      <Counter />
    </div>
  );
}
