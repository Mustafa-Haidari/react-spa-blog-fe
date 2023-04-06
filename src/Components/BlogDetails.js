import React from "react";
import classes from "./BlogDetails.module.css";
import { Link, useNavigate } from "react-router-dom";

const BlogDetails = ({ blog }) => {
  const navigate = useNavigate();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      fetch(`http://localhost:8080/api/blogs/${blog._id}`, {
        credentials: "include",
        method: "DELETE",
      }).then((response) => {
        return response.json().then((responseData) => navigate(".."));
      });
    }
  }

  return (
    <article className={classes.blog}>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <time>{blog.date}</time>
      <p>{blog.description}</p>
      <menu className={classes.actions}>
        <Link className={classes.edit_button} to="edit">
          Edit
        </Link>
        <button className={classes.delete_button} onClick={startDeleteHandler}>
          Delete
        </button>
      </menu>
    </article>
  );
};

export default BlogDetails;
