import { ChakraProvider, ScaleFade, SlideFade } from "@chakra-ui/react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.css";
import { LayoutGroup } from "framer-motion";
function MyApp({ Component, pageProps, router }) {

  return (
   
      <ChakraProvider>
        <LayoutGroup>
          <Layout>
              <ScaleFade in="true" key={router.route}>
                <Component {...pageProps} />
              </ScaleFade>
          </Layout>
        </LayoutGroup>
      </ChakraProvider>
  );
}

export default MyApp;
