import "@fontsource/roboto"
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout";
import theme from "../styles/CustomColor";
import {useEffect} from "react";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.body.style.setProperty("margin", '0', 'important');
    })
  return (
      <ChakraProvider theme={theme}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
  )
}
