import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList((prevUserList)=>{
      return [...prevUserList,user]
    });
  };
  return (
    <div>
      <AddUser onAddUser={(user)=>{addUserHandler(user)}} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
