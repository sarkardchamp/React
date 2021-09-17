import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const data = props.users.map((user) => {
    return (
      <li key={user.id}>
        {user.name} ({user.age} Years old)
      </li>
    );
  });
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.length > 0 && data}
        {props.users.length === 0 && "No Users to show... :("}
      </ul>
    </Card>
  );
};

export default UserList;
