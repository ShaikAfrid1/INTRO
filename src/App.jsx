import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [Completed, setCompleted] = useState(true);
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("chittoor");

  return (
    <div>
      <h1>Create Taks!</h1>
      <form action="#">
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <br /> <br />
        <input
          type="checkbox"
          checked={Completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
        <br /> <br />
        <input
          type="radio"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "male" ? true : false}
          value={"male"}
        />
        Male
        <br /> <br />
        <input
          type="radio"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "female" ? true : false}
          value={"female"}
        />
        Female
        <br />
        <br />
        <select value={city} onChange={(e) => setcity(e.target.value)}>
          <option value="chittoor">Chittoor</option>
          <option value="chennai">Chennai</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="banglore">Banglore</option>
        </select>
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
