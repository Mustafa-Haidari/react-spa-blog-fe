import React from "react";
import BlogForm from "../Components/BlogForm";
import { useRouteLoaderData } from "react-router-dom";

const EditPage = () => {
  const data = useRouteLoaderData("blog-details");
  return <BlogForm method={"put"} blog={data} />;
};

export default EditPage;
