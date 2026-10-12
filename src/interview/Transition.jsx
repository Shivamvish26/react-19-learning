// import { useState } from "react";

// export default function Transition() {
//   const [text, setText] = useState("Hello");
//   const [isUpdating, setIsUpdating] = useState(false);

//   function handleClick() {
//     setIsUpdating(true);

//     setTimeout(() => {
//       setText("Welcome to React!");
//       setIsUpdating(false);
//     }, 2000);
//   }

//   return (
//     <div>
//       <h2>{text}</h2>

//       <button onClick={handleClick} disabled={isUpdating}>
//         {isUpdating ? "Text Updating..." : "Change Text"}
//       </button>
//     </div>
//   );
// }

import { useState, useTransition } from "react";

export default function Transition() {
  const [text, setText] = useState("Hello");
  const [isPending, startTransition] = useTransition();
  const [isWaiting, setIsWaiting] = useState(false);

  function handleClick() {
    setIsWaiting(true);

    setTimeout(() => {
      startTransition(() => {
        setText("Welcome to React!");
      });

      setIsWaiting(false);
    }, 3000);
  }

  return (
    <div>
      <h2>{text}</h2>

      <button onClick={handleClick} disabled={isWaiting || isPending}>
        Change Text
      </button>

      {(isWaiting || isPending) && (
        <p>{isWaiting ? "Waiting 3 seconds..." : "Updating..."}</p>
      )}
    </div>
  );
}
