import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import classes from "./Header.module.css";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    dispatch(authActions.logout());
  };
  const loginHandler = (event) => {
    dispatch(authActions.login());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && (
            <Fragment>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </Fragment>
          )}
          {!isAuthenticated && (
            <li>
              <button onClick={loginHandler}>Login</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
