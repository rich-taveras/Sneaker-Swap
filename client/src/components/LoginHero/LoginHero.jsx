
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const LoginHero = (prop) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });
  console.log("test");
  return (
    <>
    <div className="col-12 mt-5 d-flex justify-content-center">
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ type: "spring", stiffness: 40, damping: 10 }}
      className="position-relative text-light col-11 d-flex justify-context-center mb-5"
    >
      <img src={prop.img} alt="" className="images-login" />
      <h1 className="position-absolute custom-txt-login">{prop.name}</h1>
    </motion.section>
    </div>
    </>
  );
};
export default LoginHero;
