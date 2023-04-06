import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Blogs from "../Components/Blogs";

const BlogsPage = () => {
  const navigation = useNavigation();
  const blogs = useLoaderData();
  const isLoading = navigation.state === "loading";
  return isLoading ? <p>Loading...</p> : <Blogs blogs={blogs} />;
};

export default BlogsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/api/blogs");
  const data = await response.json();
  return data;
}
