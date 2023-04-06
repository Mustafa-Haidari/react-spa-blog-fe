import React from "react";
import { Outlet } from "react-router-dom";
import BlogsNavigation from "../Components/BlogsNavigation";

const BlogsRootLayout = () => {
  return (
    <>
      <BlogsNavigation />
      <Outlet />
    </>
  );
};

export default BlogsRootLayout;
