import styles from "./User.module.css";
import PropTypes from "prop-types";
function UserGreeting(props) {
  const welcome = <h2 className={styles.welcome}>Welcome {props.username}</h2>;

  const LoginPrompt = (
    <h2 className={styles.login}>Please Log in to continue</h2>
  );

  return props.isLoggedIn ? welcome : LoginPrompt;
}
UserGreeting.prototypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
