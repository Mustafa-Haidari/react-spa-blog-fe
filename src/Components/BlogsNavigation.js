import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../user-context";
import classes from "./BlogsNavigation.module.css";

const PostsNavigation = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Posts
            </NavLink>
          </li>
          {userInfo?.email && (
            <li>
              <NavLink
                to="/blogs/new"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                New Post
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default PostsNavigation;
