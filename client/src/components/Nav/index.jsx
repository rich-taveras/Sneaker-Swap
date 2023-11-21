// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
import "../Nav/index.css";
// import BtnNav from "./BtnNav/BtnNav";
// import SearchBar from "./SearchBar/SearchBar";
import MainInfo from "./MainInfo/MainInfo";
import SecundaryInfo from "./SecundaryInfo/SecundaryInfo";
// import Logo from "./Logo/Logo";
import Ticker from "./Ticker/Ticker";
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
      <section className="d-flex flex-row col-12">
        <div className="d-flex flex-row justify-content-between bg-pink col-12 position-relative z-1">
          <MainInfo />
        </div>
        <Ticker />
        {/* <div className="d-flex justify-content-evenly align-items-center bg- col-12">
          <div className="d-flex col-3">
            <SearchBar />
          </div>
          <div className=" d-flex col-3 justify-content-center">
            <Logo />
          </div>
          <div className=" d-flex col-3 justify-content-end">
            <BtnNav />
          </div>
        </div> */}

        <div className="nav-bar d-flex flex-row justify-content-evenly custom-nav-items me-5 d-none d-md-flex col-md-12 position-relative z-1">
          <SecundaryInfo />
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
      </section>
    </>
  );
}

export default Nav;
