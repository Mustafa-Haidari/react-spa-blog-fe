import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isSignin = searchParams.get("mode") === "signin";
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" className={classes.form}>
      <h1>{isSignin ? "Sign in" : "Sign up"}</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {!isSignin && (
        <>
          <p>
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" name="firstname" required />
          </p>
          <p>
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="text" name="lastname" required />
          </p>
        </>
      )}
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="image">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Link to={`?mode=${isSignin ? "signup" : "signin"}`}>
          {isSignin ? "Swith to Registration" : "Swith to Login"}
        </Link>
        <button disabled={isSubmitting}>
          {isSignin
            ? isSubmitting
              ? "Logging in..."
              : "Login"
            : isSubmitting
            ? "Signing up..."
            : "Sign Up"}
        </button>
      </div>
    </Form>
  );
}

export default AuthForm;
