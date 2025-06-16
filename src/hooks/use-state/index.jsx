import { useState } from "react";


export const StateExample = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prev) => prev + 1);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

