import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import PostsRootLayout from "./pages/BlogsRootLayout";
import BlogsPage, { loader as BlogsLoader } from "./pages/BlogsPage";
import BlogDetail, { loadBlog } from "./pages/BlogDetail";
import Auth, { action as authAction } from "./pages/auth/Auth";
import { action as blogFormAction } from "./Components/BlogForm";
import { checkAuthLoader, tokenLoader } from "./util";
import NewBlogPage from "./pages/NewBlogPage";
import EditPage from "./pages/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, id: "root", loader: tokenLoader },
      {
        path: "blogs",
        element: <PostsRootLayout />,
        children: [
          {
            index: true,
            element: <BlogsPage />,
            loader: BlogsLoader,
          },
          {
            path: "new",
            element: <NewBlogPage />,
            action: blogFormAction,
            loader: checkAuthLoader,
          },
          {
            path: ":blogId",
            id: "blog-details",
            loader: loadBlog,
            children: [
              {
                index: true,
                element: <BlogDetail />,
              },
              { path: "edit", element: <EditPage />, action: blogFormAction },
            ],
          },
        ],
      },
      {
        path: "auth",
        element: <Auth />,
        action: authAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
