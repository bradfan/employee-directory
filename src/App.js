import React, {useState} from "react";
import API from "./api";
import Card from "./Card";
import Navbar from "./Navbar";
import Header from "./Header";


function App() {
  // const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  

  React.useEffect(() => {
    // setName("");
    API.getUsers().then(({ data }) => {
      console.log(data);
      setUsers(data.results);
    });
  }, []);



  //   //set up your filter function here, ex handleSearch// which will update our state
//   event.target.name: event.target.value
//   setName(event.target.value)
//   search: the value in the input box
// //then pass it as a props inside of Navbar

  // handleInputChange = event => {
  //   setName(event.target.value);
  //   setUsers(event.target.value)
  //   setState({
      
  //   })
  // }


  return (
    <div>
      <Header></Header>
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
