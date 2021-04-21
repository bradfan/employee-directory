import React, { useState } from "react";
import API from "./api";
import Card from "./Card";
import Navbar from "./Navbar";


function App() {
  const [name, setName] = useState([]);
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    setName("");
    API.getUsers().then(({ data }) => {
      console.log(data);
      setUsers(data.results);
    });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {users.map((user) => (
        <Card
          empName={user.name}
          phoneNumber={user.cell}
          email={user.email}
          dob={user.dob.date.slice(0, 10)}
          image={user.picture.thumbnail}
        />
      ))}
    </div>
  );
}

export default App;
