import "@fontsource/roboto"
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout";
import theme from "../styles/CustomColor";
import {useEffect} from "react";
import Router, {useRouter} from "next/router";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        AOS.init();
    }, []);
    
  return (
      <ChakraProvider theme={theme}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
  )
}
