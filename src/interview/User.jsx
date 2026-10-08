// handle props using the useEffect Hooks
// CHild Component
import { useEffect } from "react";

export default function User({ name }) {
  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return <h2>{name}</h2>;
}