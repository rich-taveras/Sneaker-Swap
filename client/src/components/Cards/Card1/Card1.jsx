import "../Card1/Card1.css";
import { motion } from "framer-motion";
const Card1 = (prop) => {
  return (
    <>
      <motion.div
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.1,
        }}
        className="col-12 d-sm-none d-lg-inline col-lg-3 custom-card position-relative"
      >
        <img src={prop.url} className="card-img position-absolute" alt="..." />
        <div className="col-12 custom-text-div position-absolute">
          <h5>Running Shoes</h5>
          <h1>Nike Just Do It</h1>
        </div>
      </motion.div>
    </>
  );
};
export default Card1;
