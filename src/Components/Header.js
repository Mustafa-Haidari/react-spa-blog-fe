import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../user-context";
import classes from "./Header.module.css";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    fetch(`http://localhost:8080/api/logout`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((data) => {
        if (data.loggedout) {
          setUserInfo(null);
          navigate("/");
        }
      });
    });
  };

  const email = userInfo?.email;
  return (
    <header className={classes.header}>
      <nav>
        <h2>SPA Blog</h2>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {email && (
          <>
            <button>Logged in as {userInfo.firstname}</button>
            <button onClick={logout}>Logout</button>
          </>
        )}
        {!email && (
          <>
            <Link to="auth?mode=signin">
              <button>Sign in</button>
            </Link>
            <Link to="auth?mode=signup">
              <button>Sign up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
