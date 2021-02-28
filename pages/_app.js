import Layout from "../components/Layout";
import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  );
}

export default MyApp;
