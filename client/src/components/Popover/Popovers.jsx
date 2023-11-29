import { useEffect } from "react";
import { Popover } from "bootstrap/dist/js/bootstrap.esm.min.js";

const Popovers = (props) => {
  useEffect(() => {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="popover"]')
    ).forEach((popoverNode) => new Popover(popoverNode));
  });

  return (
    
      <button
        type="button"
        className="btn btn-dark me-2"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        onClick={props.addToCart}
        data-bs-content="Item added"
      >
        <i className="fa-solid fa-cart-arrow-down"></i>
      </button>
    
  );
};
export default Popovers;
