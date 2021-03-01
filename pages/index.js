import home from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { container, item } from "../components/Animation";

export default function Home() {
  return (
    <motion.section
      className={home.home}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className={home.hero}>
        <motion.h1 variants={item}>
          abdelhamid <br /> boudiba
        </motion.h1>
        <motion.h3 variants={item}>frontend developer</motion.h3>
      </div>
    </motion.section>
  );
}
