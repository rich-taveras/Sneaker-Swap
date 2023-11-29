import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className="d-flex justify-content-evenly mt-5">
        <button type="button" className="btn btn-outline-secondary">
          Menu
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Log In
        </button>
      </div>
      <ul className="list-group mt-3">
        <a href="/"><li className="list-group-item mb-1">Home</li></a>
        <a href="/CategoryPage"><li className="list-group-item mb-1">Shop</li></a>
        <a href="/CategoryPage"><li className="list-group-item mb-1">Mens</li></a>
        <a href="/CategoryPage"><li className="list-group-item mb-1">Womens</li></a>
        <a href="/CategoryPage"><li className="list-group-item mb-1">Kids</li></a>
      </ul>
      <form className="col-12">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div>
          <span>Forgot your password?</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ul className="list-group mt-3">
        <li className="list-group-item"><a href="">Create an account</a></li>
      </ul>
      
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
