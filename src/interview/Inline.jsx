// HTML inline CSS = CSS string
// React inline CSS = JavaScript object containing CSS properties.

import React from "react";

export default function Inline() {
  return (
    <>
      <h1
        style={{
          fontSize: "20px",
          color: "white",
          background: "black",
          padding: "15px",
          borderRadius: "10px",
          width: "10%",
        }}
      >
        Inline CSS
      </h1>
    </>
  );
}
