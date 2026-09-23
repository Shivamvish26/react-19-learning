import React, { useState } from "react";

export default function Toggle() {
  const [loggedin, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const handlelogin = () => {
    setLoggedIn(!loggedin);
  };

  return (
    <div>
      {loggedin ? <h2>Toggle User</h2> : <h2>User Not Logged In</h2>}
      <br />
      <br />
      <button onClick={handlelogin}>Login</button>
      <hr />
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Value</button>{" "}
      &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement Value</button>
      <br />
      <br />
      {count == 0
        ? "The condition is matiching 0 condition"
        : count == 1
          ? "The Contidition is matching 1 condition"
          : count == 2
            ? "The condition is matching 2 condition"
            : count == 3
              ? "The condition is matching 3 condition"
              : "The Condition Does not matches"}
    </div>
  );
}
