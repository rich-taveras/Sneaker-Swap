import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import React from 'react';
import { Link } from 'react-router-dom';


const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!open} {...props}>
      <div className="d-flex justify-content-evenly mt-5">
        <button type="button" className="btn btn-outline-secondary">
          Menu
        </button>
        <Link to="/login" className="btn btn-outline-secondary">
          Log In
        </Link>
      </div>
      <CategoryMenu />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
