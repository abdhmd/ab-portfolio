import workStyle from "../../styles/Works.module.css";
import Link from "next/link";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${API_URL}/works/${id}`);
  const data = await res.json();


  return {
    props: {
      work: data,
    },
  };
};

export const getStaticPaths = async () => {
  const work_res = await fetch(`${API_URL}/works/`);
  const works = await work_res.json();

  const paths = works.map((work) => {
    return {
      params: { id: work.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Work = ({ work }) => {
  return (
    <section className={workStyle.workSection}>
      <Link href="/works/">
        <a>
          <i className="bx bx-left-arrow-alt"></i>
          back to works
        </a>
      </Link>

      <span>
        <div className={workStyle.head}>
          <span>
            <h3>{work.title}</h3>
          </span>
          {work.image.map((img) => {
            return (
              <img key={img.id} src={`${API_URL + img.url}`} alt={work.title} />
            );
          })}
        </div>
        <div className={workStyle.hero}>
          <div className={workStyle.desc}>
            <h4>description</h4>
            <p>{work.description}</p>
          </div>
          <div className={workStyle.links}>
            <h4>information</h4>
            <div className={workStyle.linksBtn}>
              <a href={work.code_source} target="_">
                <i className="bx bxl-github"></i>
                source code
              </a>
              <a href={work.view_work} target="_">
                <i className="bx bx-link-alt"></i>
                view work
              </a>
            </div>
          </div>
          <div className={workStyle.date}>
            <h4>date </h4>

            <p>{work.date}</p>
          </div>
        </div>
      </span>
    </section>
  );
};

export default Work;
