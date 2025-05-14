import { useState } from "react";
const Create = (props) => {
  console.log(props);
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState(18);

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { fullname, age };
    console.log(newUser);
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setage(e.target.value)}
          value={age}
        />
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default Create;
