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
        <meta
          name="description"
          content="Site de serviços da clínica Espaço Afetos. Serviços de acompanhamento de saúde mental, comportamental, autismo, TDAH, ABA, Denver, fonoaudiologia e neuropsicologia."
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <VStack
        bgGradient={"linear(to-bl, blue.200, white)"}
        align={"flex-start"}
        minH={"100vh"}
        w={"100%"}
        p={0}
        m={0}
        color={"black"}
      >
        <Flex flex={1}>
          <Component {...pageProps} />
        </Flex>
        <Footer2 />
      </VStack>
    </ChakraProvider>
  );
}
