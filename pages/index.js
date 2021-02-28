import home from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {  x:-20,opacity: 0 },
    visible: {
      x:0,
      opacity: 1,
    },
  };

  return (
    <motion.section className={home.home}
    variants={container}
        initial="hidden"
        animate="visible"
    >
      <div
        className={home.hero}
        
      >
        <motion.h1
          variants={item}
          // initial={{ y: 100, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
        >
          abdelhamid <br /> boudiba
        </motion.h1>
        <motion.h3
          variants={item}
          // initial={{ y: -100, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
        >
          frontend developer
        </motion.h3>
      </div>
    </motion.section>
  );
}
