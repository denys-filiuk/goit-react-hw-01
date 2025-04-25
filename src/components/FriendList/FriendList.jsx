import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import friends from "../../friends.json";

export default function FriendList() {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
