import Footer from "@/components/footer";
import Service from "@/components/service";
import Services from "@/mocks/services";
import { Stack, VStack, Text, Image } from "@chakra-ui/react";

function Home() {
  return (
    <VStack w={"100%"}>
      <Stack flex={1} w={"100%"} p={6} gap={6}>
        <Stack
          w={"100%"}
          direction={["column", "column", "column", "row"]}
          alignItems={"center"}
          justifyContent={"center"}
          p={8}
          gap={8}
        >
          <Image w={["100%", "70%", "50%", "500px"]} src="/espacoafetos.png" />
          <VStack textAlign={"center"}>
            <Text fontSize={["2xl", "3xl"]}>SOBRE NÓS</Text>
            <Text fontSize={"xl"}>
              Somos um consultório interdisciplinar e estamos sempre trabalhando
              em prol da saúde mental, bem-estar e desenvolvimento humano. Venha
              nos conhecer!
            </Text>
          </VStack>
        </Stack>

        <VStack flex={1} justifyContent={"center"} gap={8} textAlign={"center"}>
          <Text as={"b"} fontSize={["xl", "2xl", "2xl", "2xl", "2xl", "3xl"]}>
            NOSSOS SERVIÇOS: PSICOLOGIA - NEUROPSICOLOGIA - FONOAUDIOLOGIA
          </Text>
          <Stack
            flexDirection={"row"}
            flexFlow={"wrap"}
            w={["100%", "90%", "90%", "90%", "80%"]}
            justifyContent={"center"}
            wordBreak={"break-word"}
            gap={8}
          >
            {Services.map((service, i) => {
              return (
                <Service
                  key={i}
                  name={service.name}
                  img={service.img}
                  description={service.description}
                />
              );
            })}
          </Stack>
          <Text color={"grey"}>
            Clique em algum dos nossos serviços para saber mais
          </Text>
        </VStack>
      </Stack>
      <Footer />
    </VStack>
  );
}

export default Home;
