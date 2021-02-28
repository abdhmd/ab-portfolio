import Title from "../components/Title";
import { webDev, softwares } from "../db";
import mainStyle from "../styles/Main.module.css";
const skills = () => {
  return (
    <section>
      <div className="container">
        <Title title={"my skills"} />
        <main className={mainStyle.main}>
          <h4>web develompent</h4>
          <ul>
            {webDev.map((dev) => {
              return <li key={dev.id}>{dev.name}</li>;
            })}
          </ul>
          <h4>softwares</h4>
          <ul>
            {softwares.map((soft) => {
              return <li key={soft.id}>{soft.name}</li>;
            })}
          </ul>
          ;
        </main>
      </div>
    </section>
  );
};

export default skills;
