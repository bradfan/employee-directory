import React, { useState, useCallback } from "react";
import API from "./utils/api";
import Card from "./Card";
import Navbar from "./Navbar";
import Header from "./Header";

function App() {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);

  React.useEffect(() => {
    API.getUsers().then(({ data }) => {
      console.log(data);
      setUsers(data.results);
      setOriginalUsers(data.results);
    });
  }, []);

  const handleInputChange = useCallback((event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.value);

    const updatedUsers = originalUsers.filter((user) => {
      if (
        (user.name.first + " " + user.name.last).indexOf(event.target.value) !=
        -1
      ) {
        return true;
      }
      return false;
    });
    setUsers([...updatedUsers]);
  });

  const handleSort = useCallback((event) => {
    event.preventDefault();

    const sortDate = originalUsers.sort((userA, userB) => {
      const userADOB = new Date(userA.dob.date);
      const userBDOB = new Date(userB.dob.date);

      if (userADOB < userBDOB) {
        return -1;
      }
      return 1;
    });

    console.log(event.target.value);
    setUsers([...sortDate]);
  });

  return (
    <div>
      <Header></Header>
      <Navbar
        handleInputChange={handleInputChange}
        handleSort={handleSort}
      ></Navbar>
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

//   //set up your filter function here, ex handleSearch// which will update our state
//   event.target.name: event.target.value
//   setName(event.target.value)
//   search: the value in the input box
// //then pass it as a props inside of Navbar
