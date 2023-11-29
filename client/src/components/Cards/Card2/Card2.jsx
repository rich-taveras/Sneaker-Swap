import "../Card2/Card2.css";
import {motion} from "framer-motion"
const Card2 = (prop) => {
  return (
    <>
   <motion.div 
    
    
   className="col-12 col-lg-9 custom-card2 position-relative ">
   <img src={prop.url} className="position-absolute" alt="..."/>
   <div className= {`${prop.newClass} custom-text-card2 position-absolute`}>
        <h1>The Benefits </h1>
        <h1>Of Running</h1>
        <h5>Season Off 30-10%</h5>
      </div>
      </motion.div>
     
    </>
  );
};
export default Card2;
