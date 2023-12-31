import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { ADD_MULTIPLE_TO_CART } from "../../utils/actions";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      console.log(data);
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  // function toggleCart() {
  //   dispatch({ type: TOGGLE_CART });
  // }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  async function submitCheckout() {
    try {
      // Get product IDs from the cart items
      const productIds = state.cart.map((item) => item._id);

      // Add each item id to the productIds array
      // eslint-disable-next-line no-undef
      await API.post("/cart/add-to-cart", { productIds });

      // Invoke the getCheckout query passing an object containing the id for all our products
      getCheckout({
        variables: { products: state.cart },
      });
    } catch (error) {
      console.error("Error submitting checkout:", error);
    }
  }

  // if (!state.cartOpen) {
  //   return (
  //     <div className="cart-closed" onClick={toggleCart}>
  //       <span role="img" aria-label="trash">
  //         🛒
  //       </span>
  //     </div>
  //   );
  // }

  return (
    <>
      <button
        className="btn btn-primary "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shoping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {state.cart.length ? (
            <div>
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}

              <div className="flex-row space-between">
                <strong>Total: ${calculateTotal()}</strong>

                {Auth.loggedIn() ? (
                  <button onClick={submitCheckout}>Checkout</button>
                ) : (
                  <span>(log in to check out)</span>
                )}
              </div>
            </div>
          ) : (
            <p>You haven t added anything to your cart yet!</p>
          )}
        </div>
      </div>
    </>

    // <div className="cart">
    //   <div className="close" onClick={toggleCart}>
    //     [close]
    //   </div>
    //   <h2>Shopping Cart</h2>
    //   {state.cart.length ? (
    //     <div>
    //       {state.cart.map((item) => (
    //         <CartItem key={item._id} item={item} />
    //       ))}

    //       <div className="flex-row space-between">
    //         <strong>Total: ${calculateTotal()}</strong>

    //         {Auth.loggedIn() ? (
    //           <button onClick={submitCheckout}>Checkout</button>
    //         ) : (
    //           <span>(log in to check out)</span>
    //         )}
    //       </div>
    //     </div>
    //   ) : (
    //     <h3>
    //       <span role="img" aria-label="shocked">
    //         😱
    //       </span>
    //       You haven t added anything to your cart yet!
    //     </h3>
    //   )}
    // </div>
  );
};

export default Cart;
