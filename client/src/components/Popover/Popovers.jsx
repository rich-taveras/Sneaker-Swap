// import { useEffect } from "react";
// import { Popover } from "bootstrap/dist/js/bootstrap.esm.min.js";

const Popovers = (prop) => {
  // useEffect(() => {
  //   Array.from(
  //     document.querySelectorAll('button[data-bs-toggle="popover"]')
  //   ).forEach((popoverNode) => new Popover(popoverNode));
  // });

  return (
    <button type="button" className="btn btn-primary" onClick={prop.addToCart}>
      <i className="fa-solid fa-cart-arrow-down"></i>
    </button>
  );
};
export default Popovers;
