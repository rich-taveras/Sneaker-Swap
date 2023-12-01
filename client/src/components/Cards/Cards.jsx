import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import "./Cards.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Cards = () => {
  const imgCard1 =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v1-img1.jpg?v=1613749086";
  const imgCard2 =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v1-img2.jpg?v=1613749086";
  const imgCard3 =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v2-img2.jpg?v=1613749090";
  const imgCard4 =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v2-img1.jpg?v=1613749087";
  const newClass = "newClass";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.section
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className="d-flex flex-row col-12 position-relative z-1"
      >
        <Card1 url={imgCard1} />
        <Card2 url={imgCard2} />
        <Card2 url={imgCard3} newClass={newClass} />
        <Card1 url={imgCard4} />
      </motion.section>
    </>
  );
};
export default Cards;
