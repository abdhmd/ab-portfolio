import workStyle from "../../styles/Works.module.css";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getStaticProps({ params: { id } }) {
  const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        works (where:{id: ${id}}){
          id
          title
          description
          date
          code_source
          view_work
          image {
            id
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      works: data.works,
    },
  };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        works {
          id
        }
      }
    `,
  });
  return {
    paths: data.works.map((el) => ({
      params: { id: el.id },
    })),
    fallback: false,
  };
}

const Work = ({ works }) => {
  return (
    <section className={workStyle.workSection}>
      <Link href="/works/">
        <a>
          <i className="bx bx-left-arrow-alt"></i>
          back to works
        </a>
      </Link>
      {works.map((work) => {
        const date = new Date(work.date);
        const dateText = date.toLocaleDateString();
        return (
          <span>
            <div className={workStyle.head}>
              <span>
                <h3>{work.title}</h3>
              </span>
              {work.image.map((img) => {
                return (
                  <img
                    key={img.id}
                    src={`${API_URL+img.url}`}
                    alt={work.title}
                  />
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
                <h4>date pushed</h4>

                <p>{dateText}</p>
              </div>
            </div>
          </span>
        );
      })}
    </section>
  );
};

export default Work;
