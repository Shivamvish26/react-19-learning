// Uncontrolled Component

import { useRef } from "react";

export default function Getinputfilledvalues() {
  const users = useRef();
  const passwords = useRef();

  const handleformSubmit = (e) => {
    e.preventDefault();

    const user = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    console.log("Name......", user);
    console.log("Password......", password);
  };

  const handlerefSubmit = (e) => {
    e.preventDefault();
    const user = users.current.value;
    const password = passwords.current.value;
    console.log("User Ref name....", user);
    console.log("User Ref password....", password);
    // empty the input fields using the useing the useref hook
    users.current.value = "";
    passwords.current.value = "";
  };

  return (
    <div>
      <h1>Uncontrolled Component</h1>

      <form onSubmit={handleformSubmit}>
        <input type="text" id="name" placeholder="Enter Name" />

        <br />
        <br />

        <input type="password" id="password" placeholder="Enter Password" />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />
      {/* using with the help of useref hook */}
      <form onSubmit={handlerefSubmit}>
        <input type="text" id="name" placeholder="Enter Name" ref={users} />

        <br />
        <br />

        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          ref={passwords}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
