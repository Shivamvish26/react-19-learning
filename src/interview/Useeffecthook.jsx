import React, { useState, useEffect } from "react";

export default function Useeffecthook() {
  const [count, setCount] = useState(0);

  // function handleClick() {
  //   setTimeout(() => {
  //     console.log("Function called once");
  //   }, 2000);
  // }

  //  dependency without array
  // useEffect(() => {
  //   handleClick();
  // }, []);

  // without dependency without array
  //   useEffect(() => {
  //   console.log("Effect runs");
  // });

  // dependency array with dependency
  // useEffect(() => {
  // console.log("Count...", count)
  // }, [count]);

  // handle props with useffect hook
  useEffect(()=>{
    
  })

  return (
    <div>
      useEffect Hook
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  );
}
