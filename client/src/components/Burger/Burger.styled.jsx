import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 30%;
  left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  color: green;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  scale:0.8

  span {
    width: 10rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "black" : "black")};
    border-radius: 10px ;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    scale:0.2
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
