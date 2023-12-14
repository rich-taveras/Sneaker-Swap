import "../Card1/Card1.css";
import { motion } from "framer-motion";
const Card1 = (prop) => {
  return (
    <>
      <motion.div className="col-12 d-sm-none d-lg-inline col-lg-3 custom-card position-relative">
        <img src={prop.url} className="card-img position-absolute" alt="..." />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="col-12 custom-text-div position-relative"
        >
          <h5>Running Shoes</h5>
          <h1>Nike Just Do It</h1>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Card1;
