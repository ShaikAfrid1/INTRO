import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam kar le re", isCompleted: false },
  ]);
  const [title, settitle] = useState("");

  let submitHandler = (e) => {
    e.preventDefault();
    let newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    let copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);
    settitle("");
  };

  let rendertodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <div>
      <h1>Create Taks!</h1>
      <form onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <br /> <br />
        <button>Create Todo</button>
      </form>
      <br />
      <hr />
      <h1>Pending Todo's</h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default App;
