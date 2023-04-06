import { redirect } from "react-router-dom";

export async function tokenLoader() {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  if (token) {
    const response = await fetch(`http://localhost:8080/api/profile`, {
      credentials: "include",
    });
    const responseData = await response.json();
    return responseData;
  } else {
    return null;
  }
}

export async function checkAuthLoader() {
  const token = await tokenLoader();
  if (!token) {
    return redirect("/auth?mode=signin");
  }
  return null;
}
