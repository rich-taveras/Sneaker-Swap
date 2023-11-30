import "./ShopHero.css"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const ShopHero = ()=>{

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    });
    

    return(
<motion.section
 ref={ref}
 variants={{
   hidden: { opacity: 0, y: 75 },
   visible: { opacity: 1, y: 0 },
 }}
 initial="hidden"
 animate={mainControls}
 transition={{ type: "spring", stiffness: 40, damping: 10, }}
className="position-relative text-light col-12">
   
        <img src="https://eurotas-demo.myshopify.com/cdn/shop/files/bg-blog.jpg?v=1613769904" alt="" className="" />
        <h1 className="position-absolute custom-txt">Men`s Shoes</h1>
   
   
</motion.section>
    )
}
export default ShopHero