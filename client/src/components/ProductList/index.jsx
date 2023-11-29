import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';


function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    // if (!currentCategory) {
      
      return state.products;
    // }

    // return state.products.filter(
    //   (product) => product.category._id === currentCategory
    // );
   
  }

  return (
    <div className="col-12">
      {state.products.length ? (
        <section className="d-flex flex-row col-12 custom-media justify-content-center">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              brand={product.brand}
              category={product.category.name}
              image={product.image}
              model={product.model}
              price={product.price}
              size={product.size}
              
            />
          ))}
        </section>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
