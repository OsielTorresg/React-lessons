//State & props example

import React, { useState } from "react";

const ColorChanger = (props) => {
  const [currentColor, setCurrentColor] = useState(0);

  const changeColor = () => {
    setCurrentColor((prevColor) => (prevColor + 1) % props.colors.length);
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <div
        style={{
          backgroundColor: props.colors[currentColor],
          width: "200px",
          height: "200px",
        }}
      ></div>
    </div>
  );
};

const App = () => {
  const colors = ["red", "green", "blue", "yellow"];

  return (
    <div>
      <h1>Color Changer Example</h1>
      <ColorChanger colors={colors} />
    </div>
  );
};

export default App;
