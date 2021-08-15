import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  let contentVal = <li>NO Users</li>;
  if (props.users.length > 0) {
    contentVal = props.users.map((user) => (
      <li key={Math.random().toString()}>
        {user[0]} ({user[1]} Years Old)
      </li>
    ));
  }
  return (
    <Card className={classes.users}>
      <ul>{contentVal}</ul>
    </Card>
  );
};
export default UserList;
