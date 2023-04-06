import React from "react";
import BlogItem from "./BlogItem";
import classes from "./Blogs.module.css";

const Blogs = ({ blogs }) => {
  return (
    <>
      <h1>All Blogs</h1>
      <div className={classes.container}>
        {blogs.map((blog) => (
          <BlogItem key={blog._id} className={classes.item} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
