import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { StarRating } from "../starRating/StarRating";
import Popovers from "../Popover/Popovers";


function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { _id, brand, category, image, model, price, size } = item;

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

  return (
    <div className="card m-3">
      <img src={image} className="card-img-top" alt="..." />
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
    </div>

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
