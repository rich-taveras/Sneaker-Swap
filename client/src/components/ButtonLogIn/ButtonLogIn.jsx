import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Auth from "../../utils/auth";
import "./ButtonLogIn.css";
import { motion } from "framer-motion";
const ButtonLogIn = (prop) => {
  return (
    <>
      <Link></Link>
      <motion.button
        className="box"
        onClick={prop.auth}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link to={prop.link}> {prop.text}</Link>
      </motion.button>
    </>
  );
};
export default ButtonLogIn;
