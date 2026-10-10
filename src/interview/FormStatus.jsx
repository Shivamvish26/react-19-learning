// import { useFormStatus } from "react-dom";

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button type="submit" disabled={pending}>
//       {pending ? "Submitting..." : "Submit"}
//     </button>
//   );
// }

// export default function Formstatus() {
//   async function handleSubmit(formData) {
//     const name = formData.get("username");

//     console.log("Username:", name);

//     await new Promise((resolve) => setTimeout(resolve, 2000));
//   }

//   return (
//     <form action={handleSubmit}>
//       <input
//         type="text"
//         name="username"
//         placeholder="Enter your name"
//         required
//       />

//       <SubmitButton />
//     </form>
//   );
// }

// useFrom Status properties methos example
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>

      {pending && <p>Form is being submitted...</p>}

      {pending && data && <p>Username: {data.get("username")}</p>}

      {pending && <p>Method: {method}</p>}

      {pending && action && <p>Form action is running.</p>}
    </div>
  );
}

export default function Formstatus() {
  async function handleSubmit(formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <form action={handleSubmit} method="post">
      <input name="username" placeholder="Enter username" />
      <SubmitButton />
    </form>
  );
}
