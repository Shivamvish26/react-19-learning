// targeting or focusing the input field using the useRef hook
// useRef Hook
import { useRef } from "react";

export default function Inputvaluehook() {
  const inputStyle = useRef(null);
  const countRef = useRef(0);

  const handleInput = () => {
    console.log(inputStyle);
    inputStyle.current.focus();
    inputStyle.current.style.color = "red";
    inputStyle.current.placeholder = "Enter Value";
    inputStyle.current.value = "123";
  };

  const handleClick = () => {
    countRef.current = countRef.current + 1;

    console.log(countRef.current);
  };

  return (
    <div>
      useRef Hook
      <br />
      <br />
      <input type="text" ref={inputStyle} placeholder="Enter Text" />
      <br />
      <br />
      <button onClick={handleInput}>Focus on Input box</button>
      <br />
      <br />
      {/* console log data */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
