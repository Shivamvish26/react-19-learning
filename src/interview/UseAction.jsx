// import { useActionState } from "react";

// async function loginAction(previousState, formData) {
//   const username = formData.get("username");

//   if (!username) {
//     return "Please enter your name!";
//   }

//   return `Welcome, ${username}!`;
// }

// export default function UseAction() {
//   const [message, formAction, isPending] = useActionState(loginAction, "");

//   return (
//     <div>
//       <h2>Login Form</h2>

//       <form action={formAction}>
//         <input type="text" name="username" placeholder="Enter your name" />

//         <button type="submit" disabled={isPending}>
//           {isPending ? "Submitting..." : "Login"}
//         </button>
//       </form>

//       <p>{message}</p>
//     </div>
//   );
// }

import React, { useActionState } from "react";

async function handleForm(previousState, formData) {
  const name = formData.get("name");
  const password = formData.get("password");
  console.log("Name :", name, "Password : ", password);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (!name) {
    return "Please enter your name & password!";
  }

  if (!password) {
    return "Please enter your password!";
  }

  return "Name and password submitted successfully!";
}

export default function UseAction() {
  const [message, formAction, isPending] = useActionState(handleForm, "");

  return (
    <div>
      Use Action State
      <br />
      <br />
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter Name" /> <br />
        <br />
        <input type="password" name="password" placeholder="Enter Password" />
        <br />
        <br />
        <button type="submit" disabled={isPending}>
          {isPending ? "🌀 Data Submitting..." : "Data Submit"}
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
