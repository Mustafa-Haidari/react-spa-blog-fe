import { Link } from "react-router-dom";
import classes from "./BlogItem.module.css";

function BlogItem({ blog }) {
  const date = new Date(blog.createdAt);
  return (
    <div className={classes.card}>
      <img src={blog.image} alt={blog.title} />
      <div className={classes.cardbody}>
        <h3>
          <Link to={blog._id}>{blog.title}</Link>
        </h3>
        <p>Posted by {`${blog.author.firstname} ${blog.author.lastname}`}</p>
        <span>{date.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default BlogItem;
