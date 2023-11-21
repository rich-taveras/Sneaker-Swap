const MainInfo = () => {
  return (
    <>
      <div className="nav-bar d-flex ms-3 d-none d-xl-flex col-3 ">
        <a href="" className="nav-link border-end fs-6 p-3">
          +555-55-5555
        </a>
        <a href="" className="nav-link border-start fs-6 p-3">
          email@gmail.com
        </a>
      </div>
        <div className="col-12 col-md-4 col-xl-3 text-center fs-3 pt-2">SNEAKER-SWAP</div>
      <div className="nav-bar d-flex flex-row justify-content-end d-none d-md-flex col-xl-5 col-xxl-4">
        <a href="" className="nav-link border-end fs-6 p-3 ">
          HOME
        </a>
        <a href="" className="nav-link border-end border-start fs-6 p-3">
          ACCOUNT
        </a>
        <a href="" className="nav-link border-end border-start fs-6 p-3">
          SHOP
        </a>
        <a href="" className="nav-link border-end border-start fs-6 p-3">
          ABOUT US
        </a>
        <a href="" className="nav-link border-end border-start fs-6 p-3">
          LOGIN
        </a>
      </div>
    </>
  );
};

export default MainInfo;
