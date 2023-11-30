import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import ButtonLogIn from "../ButtonLogIn/ButtonLogIn";

function Nav() {
  const signup = "Signup";
  const logIn = "Log In";
  const logout = "Logout";
  const orderHistory = "Order History";
  const auth = () => Auth.logout()

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <ButtonLogIn text={orderHistory} link={"/orderHistory"} />
          <ButtonLogIn text={logout} link={"/"} auth = {auth} />
        </>
      );
    } else {
      return (
        <>
          <ButtonLogIn text={signup} link={"/signup"} />
          <ButtonLogIn text={logIn} link={"/login"} />
        </>
      );
    }
  }

  return showNavigation();
  // <header className="flex-row px-1">
  //   <h1>
  //     <Link to="/">
  //       <span role="img" aria-label="shopping bag">🛍️</span>
  //       -Shop-Shop
  //     </Link>
  //   </h1>

  //   <nav>
  //     {showNavigation()}
  //   </nav>
  // </header>
}

export default Nav;
