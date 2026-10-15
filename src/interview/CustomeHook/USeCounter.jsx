import { useEffect, useState } from "react";

export default function UseCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Update count.....", count);
  }, [count]);

  const increase = () => {
    setCount(count + 1);
    // console.log(count);
  };

  const decrease = () => {
    setCount(count - 1);
    // console.log(count);
  };

  return { count, increase, decrease };
}
