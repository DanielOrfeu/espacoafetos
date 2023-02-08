import {
  ChakraProvider,
  extendTheme,
  Flex,
  VStack,
  CSSReset,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import theme from "@/styles/theme";
import Footer2 from "@/components/footer2";
import Head from "next/head";

const GlobalStyle = ({ children }) => (
  <>
    <Head>
      <title>Espaço Afetos</title>
      <meta
        name="description"
        content="Site de serviços da clínica Espaço Afetos. Serviços de acompanhamento de saúde mental, comportamental, autismo, TDAH, ABA, Denver, fonoaudiologia e neuropsicologia."
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
      `}
    />
    {children}
  </>
);

export default function App({ Component, pageProps }) {
  const myTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={myTheme}>
      <GlobalStyle />
      <VStack
        bgGradient={"linear(to-bl, blue.200, white)"}
        align={"flex-start"}
        minH={"100vh"}
        w={"100%"}
        p={0}
        m={0}
        color={"black"}
      >
        <Flex flex={1} w={"100%"}>
          <Component {...pageProps} />
        </Flex>
        <Footer2 />
      </VStack>
    </ChakraProvider>
  );
}
