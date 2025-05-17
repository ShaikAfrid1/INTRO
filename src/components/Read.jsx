import { Fragment, useState } from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  let rendertodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <Fragment>
      <h1>Pending Todo's</h1>
      <ol>{rendertodos}</ol>
    </Fragment>
  );
};

export default Read;
