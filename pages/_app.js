import "@fontsource/roboto"
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout";
import theme from "../styles/CustomColor";
import {useEffect} from "react";
import Router, {useRouter} from "next/router";
import Head from "next/head";

const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
            elem.removeAttribute("media");
        });
    };
    tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        router.push(router.pathname);
        document.body.style.setProperty("margin", '0', 'important');
    }, []);

  return (
      <>
          <Head>
              <title>Home Page | APAC</title>
              <meta name="description" content="APAC - We are an analytics club aiming to bring more exposure to APU students about Data Science."/>
              <link rel="icon" href="/favicon.ico"/>
              <meta property="og:title" content="Home Page | APAC" />
              <meta property="og:description" content="APAC - We are an analytics club aiming to bring more exposure to APU students about Data Science." />
              <meta property="og:image" content="https://i.imgur.com/qsEF6vV.png"/>
              <meta property="twitter:title" content="Home Page | APAC"/>
              <meta property="twitter:description" content="APAC - We are an analytics club aiming to bring more exposure to APU students about Data Science." />
              <meta property="twitter:card" content="summary_large_image"/>
          </Head>
          <ChakraProvider theme={theme}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </ChakraProvider>
      </>
  )
}
