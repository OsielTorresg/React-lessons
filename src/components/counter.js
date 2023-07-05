//State and props

import React, { useState } from "react";

const Counter = () => {
  // Declare the count state variable and initialize it to 0
  const [count, setCount] = useState(0);

  // Function to increment the count state
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count state
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/* Display the count state */}
      <p>Count: {count}</p>

      {/* Buttons to increment and decrement the count */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>State and Props Example</h1>
      {/* Render the Counter component */}
      <Counter />
    </div>
  );
};

export default App;
