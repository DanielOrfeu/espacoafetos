import {
  HStack,
  Link,
  Text,
  Icon,
  VStack,
  Divider,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { GrInstagram } from "react-icons/gr";
import { BiMap } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";

function Footer() {
  return (
    <Stack
      p={6}
      textAlign={"center"}
      w={"100%"}
      alignItems={"center"}
      flexDirection={["column", "column", "column", "row"]}
      shadow={"inner"}
    >
      <VStack flex={1}>
        <HStack>
          <Icon boxSize={8} as={GrInstagram} />
          <Link href="https://www.instagram.com/espacoafetos/" isExternal>
            @espacoafetos
          </Link>
        </HStack>
        <HStack>
          espacoafetos.psicologia@gmail.com
          <Icon boxSize={8} as={HiOutlineMail} />
          <Link href="mailto:espacoafetos.psicologia@gmail.com/" isExternal>
            espacoafetos.psicologia@gmail.com
          </Link>
        </HStack>
      </VStack>
      <VStack flex={1}>
        <HStack>
          <Icon boxSize={8} as={HiPhone} />
          <Text>(21) 3706-3442</Text>
        </HStack>
        <HStack>
          <Icon boxSize={8} as={BiMap} />
          <Link
            href="https://www.google.com.br/maps/place/Estr.+Raul+Veiga,+351+-+Alcantara,+S%C3%A3o+Gon%C3%A7alo+-+RJ,+24710-480/@-22.8263558,-42.9898927,19.25z/data=!4m13!1m7!3m6!1s0x9990fabbc41611:0x4f60a1b63f293664!2sEstr.+Raul+Veiga,+351+-+Alcantara,+S%C3%A3o+Gon%C3%A7alo+-+RJ,+24710-480!3b1!8m2!3d-22.8267871!4d-42.9894393!3m4!1s0x9990fabbc41611:0x4f60a1b63f293664!8m2!3d-22.8267871!4d-42.9894393"
            isExternal
          >
            <Text>Estrada Raul Veiga 351/905</Text>
            <Text>Alcântara, São Gonçalo - RJ</Text>
          </Link>
        </HStack>
      </VStack>
      <VStack flex={1}>
        <VStack>
          <Text>
            Consultas particulares ou por encamihamento do plano de saúde:
          </Text>
          <Image height={"60px"} src="/unimed.png" />
        </VStack>
      </VStack>
    </Stack>
  );
}

export default Footer;
