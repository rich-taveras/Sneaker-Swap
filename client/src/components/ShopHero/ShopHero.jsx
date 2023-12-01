import "./ShopHero.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ShopHero = (prop) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ type: "spring", stiffness: 40, damping: 10 }}
      className="position-relative text-light col-12 mb-5"
    >
      <img src={prop.img} alt="" className="images" />
      <h1 className="position-absolute custom-txt">{prop.name}</h1>
    </motion.section>
  );
};
export default ShopHero;
