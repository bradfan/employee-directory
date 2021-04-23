import React, { useState, useEffect, useCallback } from "react";
import API from "./api";
import Card from "./Card";
import Navbar from "./Navbar";
import Header from "./Header";

function App() {
  // const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);

  React.useEffect(() => {
    // setName("");
    API.getUsers().then(({ data }) => {
      console.log(data);
      setUsers(data.results);
    });
  }, []);

  //useEffect(() => {
    // function handleInputChange(data) {
    //   setSearch(data.search);
    // }
   // console.log("hello")
 // });

  const handleInputChange = useCallback((event) => {
    event.preventDefault();
    console.log(event.target)
    console.log(event.target.value)
    // set states for users and search
  })



  return (
    <div>
      <Header></Header>
      <Navbar handleInputChange={handleInputChange}></Navbar>
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
