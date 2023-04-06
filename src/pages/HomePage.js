import React, { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageContent from "../Components/PageContent";
import { AuthContext } from "../user-context";

const HomePage = () => {
  const token = useLoaderData();
  const { setUserInfo } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      fetch(`http://localhost:8080/api/profile`, {
        credentials: "include",
      }).then((response) => {
        return response.json().then((responseData) => {
          setUserInfo(responseData);
        });
      });
    }
  }, [setUserInfo, token]);
  return (
    <PageContent title="Welcome">
      <p>Here are our blog posts</p>
      <Link to="/blogs">
        <button>Blogs</button>
      </Link>
    </PageContent>
  );
};

export default HomePage;
