import React from "react";
import Card from '../UI/Card'
import classes from './UsersList.module.css'
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
