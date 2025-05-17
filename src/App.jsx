import { nanoid } from "nanoid";
import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam kar le re", isCompleted: false },
  ]);
  return (
    <>
      <Create todos={todos} settodos={settodos} />
      <br />
      <hr />
      <Read todos={todos} settodos={settodos} />
    </>
  );
};

export default App;
