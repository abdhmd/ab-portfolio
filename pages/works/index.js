import Link from "next/link";
import Title from "../../components/Title";
import workStyle from "../../styles/Works.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/users/abdhmd/repos");
  const data = await res.json();

  return {
    props: { works: data },
  };
};

const Works = ({ works }) => {
  return (
    <section>
      <div className="container">
        <Title title={"my works"} />
        <main className={workStyle.main}>
          {works.map((work) => (
            <Link href={`/works/${work.name}`} key={work.id} className="btn">
              <a>{work.name.replace("-", " ")}</a>
            </Link>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Works;
