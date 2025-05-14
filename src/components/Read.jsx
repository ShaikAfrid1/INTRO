const Read = (props) => {
  console.log(props);
  const users = props.users;
  const setusers = props.setusers;

  const renderUsers = users.map((user, index) => {
    return <li key={index}> {user.name}</li>;
  });

  return (
    <div>
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};


export default Read;
