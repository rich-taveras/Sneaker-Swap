import Cart from "../Cart";
import "./NavBar.css"
import MenuHamburger from "../MenuHamburger/MenuHamburger";
const NavBar = () => {
  return (
    <>
      <nav className="navbar custom-nav col-12 p-3 z-2">
        <div className="container-fluid">            
          <MenuHamburger/> 
          <Cart/>       
        </div>
      </nav>
    </>
  );
};
export default NavBar;
