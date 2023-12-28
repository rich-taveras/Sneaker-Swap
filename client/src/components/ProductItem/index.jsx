import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { StarRating } from "../StarRating/StarRating";
import Popovers from "../Popover/Popovers";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { _id, category, image, model, price } = item;

  const { cart } = state;

  const addToCart = (e) => {
    e.preventDefault();
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
console.log("test");
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25 }}
      className="card m-3 border-0"
    >
      <motion.div
        className="card"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src={image} className="" alt="..." />
        <div className="card-body text-start">
          <div className="d-flex flex-row justify-content-between">
            <span className="col-4">{category}</span>
            <StarRating />
          </div>
          <h5>{model}</h5>
          <div className="d-flex justify-content-between">
            <span>${price}</span>
            <Popovers addToCart={addToCart} />
          </div>
        </div>
      </motion.div>
    </motion.div>

    // <div className="card px-1 py-1">
    //   <h1>{brand}</h1>
    //   <h1>{category}</h1>
    //   <h1>{model}</h1>
    //   <h1>{size}</h1>
    //   <h1>{price}</h1>
    //   <img src={image} alt="" />
    //   {/* <Link to={`/products/${_id}`}>
    //     <img
    //       alt={name}
    //       src={image}
    //     />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     <div> {pluralize("item")} in stock</div>
    //     <span>${price}</span>
    //   </div> */}
    //   <button onClick={addToCart}>Add to cart</button>
    // </div>
  );
}

export default ProductItem;
