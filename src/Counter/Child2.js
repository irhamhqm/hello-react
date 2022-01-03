const Child2 = ({ count, decrement }) => {
  return (
    <>
      <h2>Child 2: {count}</h2>
      <button onClick={decrement}>min</button>
    </>
  );
};

export default Child2;
