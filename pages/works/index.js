import Link from "next/link";
import Title from "../../components/Title";
import workStyle from "../../styles/Works.module.css";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;



export async function getStaticProps() {
  //Fetch the products
  const work_res = await fetch(`${API_URL}/works/`)
  const works = await work_res.json()

  //Return the products as props
  return {
    props: {
      works
    }
  }
}

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: `${API_URL}/graphql`,
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query {
//         works {
//           id
//           title
//           image {
//             id
//             url
//           }
//         }
//       }
//     `,
//   });

//   console.log(data);

//   return {
//     props: {
//       works: data.works,
//     },
//   };
// }

const Works = ({ works }) => {
  return (
    <section>
      <div className="container">
        <Title title={"my works"} />
        <main className={workStyle.main}>
          {works.map((work) => (
            <span key={work.id}>
              <Link href={`/works/${work.id}`} className="btn">
                <a>{work.title}</a>
              </Link>
              {work.image.map((img) => {
                return (
                  <img
                    key={img.id}
                    src={`${API_URL+img.url}`}
                    alt={work.title}
                  />
                );
              })}
            </span>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Works;
