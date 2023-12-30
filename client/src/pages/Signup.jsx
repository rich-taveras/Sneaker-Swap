import { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import LoginHero from "../components/LoginHero/LoginHero";

// eslint-disable-next-line no-unused-vars
function Signup(prop) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const signUpImg =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v7-img1.jpg?v=1613762451";

  return (
    <>
      <div className="col-12 d-flex justify-content-center">
        <form onSubmit={handleFormSubmit} className="mt-5">
          <div className="mb-3 mt-5">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              className="form-control"
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              className="form-control"
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              className="form-control"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              className="form-control"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <LoginHero img={signUpImg} />
    </>
  );
}

export default Signup;
