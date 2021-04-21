import React, { useState } from "react";
import API from './api';
import Card from "./Card";

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  // name => 'Dave'

  React.useEffect(() => {
    setName(""); // name => 'David'
    API.getUsers().then(({data}) => {
      console.log(data)
      setUsers(data.results)
    })
  }, [])

  return users.map(user => (
<Card empName = {name}
    role = ""
    phoneNumber = ""
    email = ""
    dob = ""/>
  ))
    
  ;
}

export default App;
