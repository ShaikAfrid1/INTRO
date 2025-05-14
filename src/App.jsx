import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
  const [users, setusers] = useState([
    { name: "Afrid", age: 31 },
    { name: "Aushu", age: 36 },
    { name: "shafu", age: 24 },
  ]);

  return (
    <div>
      <Create />
      <Read users={users} setusers={setusers} />
    </div>
  );
};

export default App;
