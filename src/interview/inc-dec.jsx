import React, { useState } from "react";

export default function IncDec() {
  const [incrementvalue, setIncrementValue] = useState(0);
  const [decrementvalue, setDecrementValue] = useState(0);

  return (
    <>
      <p>Increment Value: {incrementvalue}</p>
      <p>Decrement Value: {decrementvalue}</p>
      <button onClick={(e) => setIncrementValue(incrementvalue + 1)}>
        Increment
      </button>{" "}
      <br /> <br />
      <button onClick={(e) => setDecrementValue(decrementvalue - 1)}>
        Decrement
      </button>
    </>
  );
}
