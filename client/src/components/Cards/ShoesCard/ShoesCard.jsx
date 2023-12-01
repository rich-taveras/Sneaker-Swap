import "./ShoesCard.css";
import { StarRating } from "../../starRating/StarRating";
const ShoesCard = () => {
  const shoesCard = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];

  return (
    <>
      <section className="d-flex flex-row col-12 custom-media justify-content-center">
        {shoesCard.map(({ id }) => {
          return (
            <>
              <div className="card m-3" id={id}>
                <img
                  src="https://eurotas-demo.myshopify.com/cdn/shop/products/product-v1-img3.jpg?v=1565778175"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-start">
                  <div className="d-flex flex-row justify-content-between">
                    <span className="col-4">Class of the Shoe</span>

                    <StarRating />
                  </div>
                  <h5>Name of the shoe</h5>
                  <div className="d-flex justify-content-between">
                    <span>Price</span>
                    <a href="">
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default ShoesCard;
