import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import CategoryMenu from "../CategoryMenu";
import Nav from "../Nav";


const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className="d-flex justify-content-evenly mt-5">
       <Nav/>
      </div>
     <CategoryMenu/>

      
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
