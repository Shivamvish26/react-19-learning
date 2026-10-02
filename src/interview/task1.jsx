// digital clock in react js

import { useState, useEffect } from "react";

export default function Clock({ colour }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1
        style={{
          color: colour,
          backgroundColor: "#7a7a7a",
          width: "120px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {time}
      </h1>
    </div>
  );
}
