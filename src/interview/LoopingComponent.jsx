// Looing throught the array of the object and displaying in other component using the props
// file LoopingMap.jsx
export default function LoopingComponent({ data }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        width: "400px",
        marginBottom: "10px",
      }}
    >
      <h3>Name : {data.name}</h3>
      <h4>Age : {data.age}</h4>
      <h5>Email : {data.email}</h5>
    </div>
  );
}
