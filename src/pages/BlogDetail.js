import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import BlogDetails from "../Components/BlogDetails";

const BlogDetail = () => {
  const data = useRouteLoaderData("blog-details");
  return (
    <>
      <p>
        <Link style={{ color: "#fff" }} to="..">
          Back
        </Link>
      </p>
      <BlogDetails blog={data} />
    </>
  );
};

export default BlogDetail;

export async function loadBlog({ request, params }) {
  const result = await fetch(
    "http://localhost:8080/api/blogs/" + params.blogId
  );
  const resultData = await result.json();
  return resultData;
}
