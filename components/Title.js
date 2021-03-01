import { motion } from "framer-motion";
import titleStyle from "../styles/Title.module.css";
import { container, item } from "../components/Animation";

const Title = ({ title }) => {
  // const hTwo = {
  //   hidden: { x: -20, opacity: 0 },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       delay: 0.4,
  //       duration: 0.4,
  //     },
  //   },
  // };
  return (
    <div className={titleStyle.title}>
      <div className={titleStyle.titleContent}>
        <motion.span variants={container} initial="hidden" animate="visible">
          <motion.h2 variants={item}>{title}</motion.h2>
          <motion.span
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              delay:.8,
              duration: 2,
              ease: "linear",
              loop: Infinity,
            }}
            className={`btn ${titleStyle.scrollBtn}`}
          >
            scroll down <i className="bx bx-right-arrow-alt"></i>
          </motion.span>
        </motion.span>
      </div>
    </div>
  );
};

export default Title;
