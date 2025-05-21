import { createContext, useState } from "react";

export const todoContext = createContext(null);

const Wrapper = (props) => {
  const [todos, settodos] = useState([
    { id: 1, title: "Example", isCompleted: false },
  ]);
  return (
    <todoContext.Provider value={[todos, settodos]}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
