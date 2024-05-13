import React, { useState } from "react";
function Loop() {
  const [counter, setCounter] = useState(5);
  const handleIncrement = () => {
    setCounter(counter + 5);
    console.log("increasing");
  };
  const handleDecrement = () => {
    setCounter(counter - 3);
    console.log("decreasing");
  };
  return (
    <>
      <p> your value is {counter}</p>
      <button onClick={handleIncrement}> increment</button>
      <button onClick={handleDecrement}> decrement</button>
    </>
  );
}
export default Loop;
