import React from "react";
import { useCount, useIncrement, useDecrement } from "../state/count";

export const Counter = () => {
  const count = useCount();
  const increment = useIncrement();
  const decrement = useDecrement();

  return (
    <>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={() => increment(2)}>+</button>
    </>
  );
};
