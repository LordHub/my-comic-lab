import {
  Center,
  Button,
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  HStack,
  Box,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <Stack
      fontFamily={"Outfit"}
      marginBottom={20}
      marginLeft={20}
      marginRight={20}
    >
      <Stack>
        <Center>
          <Heading fontSize="3xl">Contacto</Heading>
        </Center>
        <Center>
          <Text marginBottom={"40px"} fontSize="lg">
            Estamos en contacto. Envíame un mensaje
          </Text>
        </Center>
      </Stack>

      <HStack spacing="24px">
        <Box width={"50%"}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement>
                <BsPerson color="gray.800" />
              </InputLeftElement>
              <Input type="text" size="md" />
            </InputGroup>
          </FormControl>
        </Box>
        <Box width={"50%"}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement>
                <MdOutlineEmail color="gray.800" />
              </InputLeftElement>
              <Input type="text" size="md" />
            </InputGroup>
          </FormControl>
        </Box>
      </HStack>
      <FormControl>
        <FormLabel>Mensaje</FormLabel>
        <Textarea placeholder="Escribe tu mensaje" />
      </FormControl>
      <Button variant="solid" bg="#362C64" color="white" _hover={{}}>
        <IoIosSend />
        Send Message
      </Button>
    </Stack>
  );
}
