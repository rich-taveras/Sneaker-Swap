import "./NewArrivalTxt.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const NewArrivalTxt = () => {
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
      className="pt-4 mb-4 text-center custom-section-txt col-12"
    >
      <h1 className="fs-1">New Arrival</h1>
    </motion.section>
  );
};
export default NewArrivalTxt;
