import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.data.map((meetup) => {
        return (
          <li key={meetup.id}>
            <MeetupItem
              id={meetup.id}
              title={meetup.title}
              src={meetup.image}
              address={meetup.address}
              description={meetup.description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MeetupList;
