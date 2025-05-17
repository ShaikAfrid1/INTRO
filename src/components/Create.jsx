import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
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

  return (
    <>
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
    </>
  );
};

export default Create;
