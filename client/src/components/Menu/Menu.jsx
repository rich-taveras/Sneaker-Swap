<<<<<<< HEAD
import React, { useState } from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.div`
  margin: 10px;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Arial', sans-serif;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ primary }) => (primary ? '#007BFF' : '#DC3545')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#c82333')};
  }
`;
=======
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import CategoryMenu from "../CategoryMenu";
import Nav from "../Nav";
>>>>>>> f03d7cf2b9963433f68644c9716b3f98f900fad5

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

  return (
<<<<<<< HEAD
    <div onMouseEnter={handleMouseEnter}>
      <StyledMenu open={open} aria-hidden={!open} {...props}>
        <div className="d-flex justify-content-evenly mt-5">
          <Link to="#" className="btn btn-outline-secondary" onClick={toggleMenu}>
            Menu
          </Link>
          <Link to="#" className="btn btn-outline-secondary" onClick={toggleLoginForm}>
            Login
          </Link>
          <Link to="#" className="btn btn-outline-secondary" onClick={toggleSignupForm}>
            Sign Up
          </Link>
        </div>
        {isLoginFormVisible && (
          <StyledFormContainer>
            <StyledForm>
              <StyledInput type="text" placeholder="Email" />
            </StyledForm>
            <StyledForm>
              <StyledInput type="password" placeholder="Password" />
            </StyledForm>
            <StyledButton primary type="button">
              Log In
            </StyledButton>
          </StyledFormContainer>
        )}
        {isSignupFormVisible && (
          <StyledFormContainer>
            <StyledForm>
              <StyledInput type="text" placeholder="First Name" />
            </StyledForm>
            <StyledForm>
              <StyledInput type="text" placeholder="Last Name" />
            </StyledForm>
            <StyledForm>
              <StyledInput type="text" placeholder="Email" />
            </StyledForm>
            <StyledForm>
              <StyledInput type="password" placeholder="Password" />
            </StyledForm>
            <StyledButton primary type="button">
              Sign Up
            </StyledButton>
          </StyledFormContainer>
        )}
        {!isLoginFormVisible && !isSignupFormVisible && (
          <ul className="list-group mt-3">
            <li className="list-group-item mb-1">Home</li>
            <li className="list-group-item mb-1">Shop</li>
            <li className="list-group-item mb-1">Men</li>
            <li className="list-group-item mb-1">Woman</li>
            <li className="list-group-item mb-1">My Wishlist</li>
          </ul>
        )}
      </StyledMenu>
    </div>
=======
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className="d-flex justify-content-evenly mt-5">
        <Nav />
      </div>
      <CategoryMenu />
    </StyledMenu>
>>>>>>> f03d7cf2b9963433f68644c9716b3f98f900fad5
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
