import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const newPassword = passwordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDXBK1X6BIcNXQ4rWzJyvd63PF23Wm_OQc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: true,
        }),
        "Content-Type": "application/json",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="6"
          ref={passwordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
