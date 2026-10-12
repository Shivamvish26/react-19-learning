import React from "react";

export default function Liftingup({ name, setName }) {
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}