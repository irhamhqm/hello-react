
import { useState } from "react";

import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h2>App: {count}</h2>
      <Child1 count={count} increment={increment} />
      <Child2 count={count} decrement={decrement} />
    </div>
  );
}