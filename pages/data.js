import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const data = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return <p key={message.id}>{message.title}</p>;
      })}
    </div>
  );
};

export async function getStaticProps() {



  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        works {
          id
          title
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
      messages: data.works,
    },
  };
}



export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
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


  const paths = data.works.map((work) => {
    console.log(work.id,'test')
    console.log("tetiii")
    return {
      params: { id: work.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export default data;
