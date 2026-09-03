import React from "react";

export default function Rendering() {
  const fruits = ["Mango", "Banana", "Apple", "Oranges"];

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
