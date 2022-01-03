export default function Child1({ count, increment }) {
  return (
    <>
      <h2>Child 1: {count}</h2>
      <button onClick={increment}>add</button>
    </>
  );
}
