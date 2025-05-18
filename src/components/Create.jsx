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
    <div className=" w-[60%] p-10 ">
      <h1 className="mb-10 text-6xl font-thin ">
        Set <span className="text-red-400">Remainders</span> for <br /> Tasks!
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className=" p-2 border-b w-full text-2xl font-thin outline-0"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <br /> <br />
        <button className="mt-10 text-xl px-10 py-2 border rounded hover:bg-gray-700 cursor-pointer active:-scale-1 ">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
