// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
import "../Nav/index.css";
import BtnNav from "./BtnNav/BtnNav";
import SearchBar from "./SearchBar/SearchBar";
import MainInfo from "./MainInfo/MainInfo";
import SecundaryInfo from "./SecundaryInfo/SecundaryInfo";
import Logo from "./Logo/Logo";
function Nav() {

  // function showNavigation() {
  //   if (Auth.loggedIn()) {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/orderHistory">Order History</Link>
  //         </li>
  //         <li className="mx-1">
  //           {/* this is not using the Link component to logout or user and then refresh the application to the start */}
  //           <a href="/" onClick={() => Auth.logout()}>
  //             Logout
  //           </a>
  //         </li>
  //       </ul>
  //     );
  //   } else {
  //     return (
  //       <ul className="flex-row">
  //         <li className="mx-1">
  //           <Link to="/signup">Signup</Link>
  //         </li>
  //         <li className="mx-1">
  //           <Link to="/login">Login</Link>
  //         </li>
  //       </ul>
  //     );
  //   }
  // }

  return (
    <>
      <div className="d-flex justify-content-between">
       <MainInfo/>
      </div>
      <div className="text-center bg-black">
        <span className="fs-5 text-light">Get Discount 30% Off</span>
      </div>
      <div className="d-flex justify-content-evenly align-items-center bg-pink">
        <div className="d-flex col-3">
        <SearchBar/>
        </div>
        <div className=" d-flex col-3 justify-content-center">
          <Logo/>
                 
        </div>
        <div className=" d-flex col-3 justify-content-end">
        <BtnNav/>
        </div>
      </div>
      <div>
      <div className=" col-12 nav-bar d-flex justify-content-evenly custom-nav-items me-5 bg-green">
        <SecundaryInfo/>
        </div>
      </div>

      {/* <header className="flex-row px-1">
        <h1>
          <Link to="/">
            <span role="img" aria-label="shopping bag">
              🛍️
            </span>
            -Shop-Shop
          </Link>
        </h1>

        <nav>{showNavigation()}</nav>
      </header> */}
    </>
  );
}

export default Nav;
