import Cart from "../Cart";
import CartBody from "../CartBody/CartBody";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
const NavBar = () => {
  return (
    <>
      <nav className="navbar col-12 p-3 z-2">
        <div className="container-fluid">            
          <MenuHamburger/> 
          <Cart/>       
        </div>
      </nav>
    </>
  );
};
export default NavBar;
