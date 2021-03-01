import Title from "../components/Title";
import { webDev, softwares } from "../db";
import mainStyle from "../styles/Main.module.css";
import { motion } from "framer-motion";
import {
  skillListAnimation,
  skillAnimation,
  skillListAnimationItem,
  skillAnimationItem,
} from "../components/Animation";
const skills = () => {
  return (
    <section>
      <div className="container">
        <Title title={"my skills"} />
        <motion.main
          variants={skillAnimation}
          initial="hidden"
          animate="visible"
          className={mainStyle.main}
        >
          <motion.h4 variants={skillAnimationItem}>web develompent</motion.h4>
          <motion.ul
            variants={skillListAnimation}
            initial="hidden"
            animate="visible"
          >
            {webDev.map((dev) => {
              return (
                <motion.li variants={skillListAnimationItem} key={dev.id}>
                  {dev.name}
                </motion.li>
              );
            })}
          </motion.ul>
          <motion.h4 variants={skillAnimationItem}>softwares</motion.h4>
          <motion.ul
            variants={skillAnimationItem,skillListAnimation}
            initial="hidden"
            animate="visible"
          >
            {softwares.map((soft) => {
              return (
                <motion.li variants={skillListAnimationItem} key={soft.id}>
                  {soft.name}
                </motion.li>
              );
            })}
          </motion.ul>
          ;
        </motion.main>
      </div>
    </section>
  );
};

export default skills;
