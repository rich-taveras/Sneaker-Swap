import CartBody from "../CartBody/CartBody";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
const NavBar = () => {
  return (
    <>
      <nav className="navbar position-absolute p-3 z-2">
        <div className="container-fluid">            
          <MenuHamburger/>        
          <CartBody />
        </div>
      </nav>
    </>
  );
};
export default NavBar;
