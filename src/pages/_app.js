import { ChakraProvider, extendTheme, Flex, VStack } from "@chakra-ui/react";
import theme from "@/styles/theme";
import Footer2 from "@/components/footer2";
import Footer from "@/components/footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const myTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={myTheme}>
      <Head>
        <title>Espaço Afetos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <VStack
        bgGradient={"linear(to-bl, blue.200, white)"}
        align={"flex-start"}
        minH={"100vh"}
        w={"100vw"}
        p={0}
        m={0}
        overflowX={"hidden"}
        overflowY={"scroll"}
        color={"black"}
      >
        <Flex flex={1}>
          <Component {...pageProps} />;
        </Flex>
        <Footer2 />
      </VStack>
    </ChakraProvider>
  );
}
