import UseCounter from "./USeCounter";

export default function Counter() {
  const { count, increase, decrease } = UseCounter();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
