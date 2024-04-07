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
  useInputGroupStyles,
  IconButton,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <Stack fontFamily={"Outfit"} padding={20}>
      <Stack>
        <Center>
          <Heading fontSize="3xl">Contacto</Heading>
        </Center>
        <Center>
          <Text fontSize="lg">Estamos en contacto. Envíame un mensaje</Text>
        </Center>
      </Stack>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputLeftElement>
            <BsPerson color="gray.800" />
          </InputLeftElement>
          <Input type="text" size="md" />
        </InputGroup>
        <FormControl>
          <FormLabel>Mail</FormLabel>
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement>
              <MdOutlineEmail color="gray.800" />
            </InputLeftElement>
            <Input type="text" size="md" />
          </InputGroup>
        </FormControl>
      </FormControl>
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
