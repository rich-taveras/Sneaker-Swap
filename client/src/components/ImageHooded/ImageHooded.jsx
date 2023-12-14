import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const ImageHooded = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <section className="my-5 col-12">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ type: "spring", stiffness: 40, damping: 12 }}
        className="container"
      >
        <img
          src="https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v4-img1_d7d23fbd-20f6-45bc-b2f9-453de902c514.jpg?v=1613790783"
          className="img-fluid"
          alt=""
        />
      </motion.div>
    </section>
  );
};
export default ImageHooded;
