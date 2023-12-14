import "../Card2/Card2.css";
import { motion, AnimatePresence } from "framer-motion";
const Card2 = (prop) => {
  return (
    <>
      <div className="col-12 col-lg-9 custom-card2 position-relative ">
        <img src={prop.url} className="position-absolute" alt="..." />
        <AnimatePresence />
        {
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`${prop.newClass} custom-text-card2 position-absolute`}
          >
            <h1>The Benefits </h1>
            <h1>Of Running</h1>
            <h5>Season Off 30-10%</h5>
          </motion.div>
        }

        <AnimatePresence />
      </div>
    </>
  );
};
export default Card2;
