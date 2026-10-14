import { useId } from "react";

export default function Useridhook() {
  const nameId = useId();
  const emailId = useId();

  return (
    <>
      {/* unique id */}
      {nameId}
      {/* _r_o_ */}
      <br />
      {emailId}
      {/* _r_1_ */}
      <br />
      <br />
      <form>
        <label htmlFor={nameId}>Name</label>
        <input id={nameId} type="text" />

        <br />
        <br />

        <label htmlFor={emailId}>Email</label>
        <input id={emailId} type="email" />
      </form>

      {/* we can also write as for html and id i.e
    htmlfor={`${id}-name`} & id={`${id}-name`} for label as well as for input filed
    */}
    </>
  );
}
