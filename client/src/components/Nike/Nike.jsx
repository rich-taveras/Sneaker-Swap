import "./Nike.css"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Nike =()=>{

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    });

    return(
<section className="col-12 d-flex mt-5 justify-content-center position-relative">
    <motion.div 
     ref={ref}
     variants={{
       hidden: { opacity: 0, y: 75 },
       visible: { opacity: 1, y: 0 },
     }}
     initial="hidden"
     animate={mainControls}
     transition={{ type: "spring", stiffness: 40, damping: 10, }}
    className="position-relative col-10">
        <img 
         
        src="https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v6-img1.jpg?v=1613749389" alt="" />
        <motion.div
         className="position-absolute z-1 custom-nike-txt">
            <h6>Basketball Shoe</h6>
            <h1>Nike Just Do It</h1>
            <h5>Season Off 30--10%</h5>
        </motion.div>
    </motion.div>
</section>
    )
}
export default Nike