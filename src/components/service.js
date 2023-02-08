import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

function Service({ name, img, description } = props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        overflow="hidden"
        _hover={{
          cursor: "pointer",
        }}
        borderWidth="1px"
        borderRadius="lg"
        shadow={"dark-lg"}
        maxW={"300px"}
        textAlign={"center"}
        maxH={"300px"}
        onClick={onOpen}
      >
        <Image src={img} />
        <Text p={3}>{name}</Text>
      </Box>
      <Modal
        colorScheme={"pink"}
        onClose={onClose}
        size={["6xl"]}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent backgroundColor={"azure"} color={"black"}>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {description.split("\n").map((txt, i) => {
              return <Text key={i}>{txt}</Text>;
            })}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Service;
