import React from "react";
import {
  Form,
  json,
  redirect,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import classes from "./BlogForm.module.css";

const BlogForm = ({ method, blog }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }
  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={blog ? blog.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={blog ? blog.image : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={blog ? blog.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default BlogForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const blogData = {
    id: params.blogId,
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/api/blogs";

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
    credentials: "include",
  });
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/blogs");
}
