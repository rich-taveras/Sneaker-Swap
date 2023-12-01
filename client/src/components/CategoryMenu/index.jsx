import "./index.css";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <>
      <div>
        <ul className="list-group">
          <Link key={"home"} className="text-center m-3" to="/">
            <button
              className="btnMenu"
              onClick={() => {
                handleClick("");
              }}
            >
              Home<span className="first spanMenu"></span>
              <span className="second spanMenu"></span>
              <span className="third spanMenu"></span>
              <span className="fourth spanMenu"></span>
            </button>
          </Link>
          {categories.map((item) => (
            <Link className="text-center" key={item.id} to={`/${item.name}`}>
              <button
                key={item._id}
                onClick={() => {
                  handleClick(item._id);
                }}
                className="btnMenu m-3"
              >
                {item.name}
                <span className="first spanMenu"></span>
                <span className="second spanMenu"></span>
                <span className="third spanMenu"></span>
                <span className="fourth spanMenu"></span>
              </button>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryMenu;
