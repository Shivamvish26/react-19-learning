// handle props using the useEffect Hooks
// Parent Component
import { useState } from "react";
import User from "./User";

export default function Hanpropeffect() {
  const [name, setName] = useState("Shubham");

  return (
    <div>
      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>

      <User name={name} />
      
    </div>
  );
}