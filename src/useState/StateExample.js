import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, SetInputValue] = useState("Osiel");
  let onChange = (event) => {
    const newValue = event.target.value;
    SetInputValue(newValue);
  };
  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
