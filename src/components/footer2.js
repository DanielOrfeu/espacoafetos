import { HStack, Link, Text, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

function Footer2() {
  return (
    <HStack
      p={6}
      w={"100%"}
      minH={"70px"}
      justifyContent={"center"}
      textAlign={"center"}
      shadow={"inner"}
    >
      <Text fontSize={"l"} color={"gray"}>
        Site criado com <Icon as={FaHeart} /> por{" "}
        <Link href="https://www.linkedin.com/in/danielorfeu/" isExternal>
          Daniel Orfeu
        </Link>
        {" e "}
        <Link href="https://www.linkedin.com/in/estherpb/" isExternal>
          Esther Bussinger
        </Link>
      </Text>
    </HStack>
  );
}

export default Footer2;
