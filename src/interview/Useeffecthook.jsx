import React, { useState, useEffect } from "react";

export default function Useeffecthook() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Function called once");
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      useEffect Hook
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  );
}
