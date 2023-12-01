import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

=======
import CategoryMenu from "../CategoryMenu";
import Nav from "../Nav";
>>>>>>> 86917435f1d7d9879226e614388a0e37ed0e0269

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!open} {...props}>
      <div className="d-flex justify-content-evenly mt-5">
<<<<<<< HEAD
        <button type="button" className="btn btn-outline-secondary">
          Menu
        </button>
        <Link to="/login" className="btn btn-outline-secondary">
          Log In
        </Link>
=======
        <Nav />
>>>>>>> 86917435f1d7d9879226e614388a0e37ed0e0269
      </div>
      <CategoryMenu />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
