import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const date = new Date("June 21, 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>
        {date.toDateString()} [{count}]
      </span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
