import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import LoginHero from "../components/LoginHero/LoginHero";

// eslint-disable-next-line no-unused-vars
function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const loginImgUrl =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v7-img1.jpg?v=1613762451";

  return (
    <>
      <section className="col-12 d-flex justify-content-center">
        <form className="mt-5" onSubmit={handleFormSubmit}>
          <div className="mb-3 mt-5">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We`ll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password
            </label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
      <LoginHero img={loginImgUrl} />
    </>
  );
}

export default Login;
