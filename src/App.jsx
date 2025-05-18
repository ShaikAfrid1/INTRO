import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Test", isCompleted: false },
  ]);
  return (
    <div className="flex w-screen h-screen bg-gray-800 p-10 text-white">
      <Create todos={todos} settodos={settodos} />
      <br />
      <hr />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
