// child component

export default function Userpropchild({ handletextname, name }) {
  return (
    <div>
      <p>Props Child Component</p>

      {handletextname && <button onClick={handletextname}>Run Function</button>}

      {name && <button onClick={name}>Print Name</button>}
    </div>
  );
}
