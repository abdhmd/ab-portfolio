import workStyle from "../../styles/Works.module.css";
import Link from "next/link";
export const getStaticPaths = async () => {
  const res = await fetch("https://api.github.com/users/abdhmd/repos");
  const data = await res.json();
  const paths = data.map((works) => {
    return {
      params: { id: works.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.id;
  const res = await fetch(`https://api.github.com/repos/abdhmd/${name}`);
  const data = await res.json();

  return {
    props: { work: data },
  };
};

const Work = ({ work }) => {
  const url = `https://hmd-${work.name}.netlify.app`;
  const date = new Date(work.created_at);
  const dateText = date.toLocaleDateString();

  return (
    <section className={workStyle.workSection}>
      <Link href="/works/">
        <a>
          <i className="bx bx-left-arrow-alt"></i>
          back to works
        </a>
      </Link>
      <div className={workStyle.head}>
        <span>
        <h3>{work.name.replace("-", " ")}</h3>
        </span>
        <img src={work.owner.avatar_url} alt={work.name} />
      </div>
      <div className={workStyle.hero}>
        <div className={workStyle.desc}>
          <h4>description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            beatae! Voluptate
          </p>
        </div>
        <div className={workStyle.links}>
          <h4>information</h4>
          <div className={workStyle.linksBtn}>
            <a href={work.html_url} target="_">
              <i className="bx bxl-github"></i>
              source code
            </a>
            <a href={url} target="_">
              <i className="bx bx-link-alt"></i>
              view work
            </a>
          </div>
        </div>
        <div className={workStyle.date}>
          <h4>date</h4>

          <p>{dateText}</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
