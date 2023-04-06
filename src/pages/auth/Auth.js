import React from "react";
import { json, redirect } from "react-router-dom";
import AuthForm from "../../Components/auth/AuthForm";

const Auth = () => {
  return <AuthForm />;
};

export default Auth;

// react-router-dom action before rendering the component
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "signin";

  if (mode !== "signin" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const signupData = {
    ...authData,
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
  };

  const response = await fetch("http://localhost:8080/api/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mode === "signin" ? authData : signupData),
    credentials: "include",
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  return redirect("/");
}
