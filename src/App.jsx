const App = () => {
  let n = 10;
  let s = "Hello World!";
  let b = false;
  let nu = null;
  let un = undefined;
  let arr = [12, "hello", null, undefined, true, "hi"];
  let obj = {
    name: "John",
    age: 23,
  };
  return (
    <div>
      <h1>Data types</h1>
      <h2>Number: {n}</h2>
      <h2>String: {s}</h2>
      <h2>Boolean: {b ? "hello" : "not hello"}</h2>
      <h2>Null: {nu}</h2>
      <h2>Undefined: {un}</h2>
      <h2>Array: {arr}</h2>
      <h2>
        Object: {obj.name} | {obj.age}
      </h2>
    </div>
  );
};

export default App;
