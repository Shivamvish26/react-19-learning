import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Counter :{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Increase The value
      </button>
    </>
  );
}

export default App;
