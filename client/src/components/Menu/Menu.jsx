import React, { useState } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import CategoryMenu from "../CategoryMenu";
import Nav from "../Nav";

const Menu = ({ open, ...props }) => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);

  const toggleLoginForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
    setSignupFormVisible(false);
  };

  const toggleSignupForm = () => {
    setSignupFormVisible(!isSignupFormVisible);
    setLoginFormVisible(false);
  };

  const toggleMenu = () => {
    setLoginFormVisible(false);
    setSignupFormVisible(false);
  };

  const handleMouseEnter = () => {
  };
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);

  const toggleLoginForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
    setSignupFormVisible(false);
  };

  const toggleSignupForm = () => {
    setSignupFormVisible(!isSignupFormVisible);
    setLoginFormVisible(false);
  };

  const toggleMenu = () => {
    setLoginFormVisible(false);
    setSignupFormVisible(false);
  };

  const handleMouseEnter = () => {
    // Add functionality here if needed
  };

  return (
    <StyledMenu open={open} aria-hidden={!isLoginFormVisible} {...props}>
      <div className="d-flex justify-content-evenly mt-5">
        <Nav />
      </div>
      <CategoryMenu />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
