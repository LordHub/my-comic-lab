import {
  Button,
  Heading,
  Text,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Image,
  VStack,
  Grid,
  Link,
  Center,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Contact() {
  return (
    <Flex justifyContent={"center"} padding={10}>
      <VStack
        border={"2px"}
        borderRadius={"8px"}
        borderColor={"#362c64"}
        width={800}
        backgroundColor={"#D0BEFF"}
      >
        <HStack padding={5}>
          <Box width={300}>
            <Heading fontFamily={"Outfit"}>Contacto</Heading>
            <Text fontFamily={"Outfit"}>
              Para cualquier consulta, duda o sugerencia, no dudes en ponerte en
              contacto
            </Text>
          </Box>

          <Image
            boxSize="150px"
            src="https://qph.cf2.quoracdn.net/main-qimg-3b521cc666ce470f30712cb7cfd04fb1.webp"
          ></Image>
        </HStack>
        <Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={5}>
            <Card>
              <CardHeader>
                <Flex justifyContent={"center"}>
                  <MdOutlineEmail size={30} />
                  <Text fontWeight={"bold"}>Email</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                Si no eres fan de las redes sociales, ¡te espero en mi bandeja
                de entrada!
              </CardBody>
              <CardFooter>
                <Button className="navbarlink">mycomiclab@gmail.com</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Flex justifyContent={"center"}>
                  <FaYoutube size={30} />
                  <Text fontWeight={"bold"}>YouTube</Text>
                </Flex>
              </CardHeader>
              <CardBody>
                Si estás de paso por uno de mis vídeos, ¡coméntame!
              </CardBody>
              <CardFooter>
                <Button>
                  <Link
                    className="navbarlink"
                    href="https://www.youtube.com/@mycomiclab1"
                    isExternal
                  >
                    @mycomiclab1
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Flex justifyContent={"center"}>
                  <FaInstagram size={30} />
                  <Text fontWeight={"bold"}>Instagram</Text>
                </Flex>
              </CardHeader>

              <CardBody>Si prefieres instagram, ¡mándame un mensaje!</CardBody>
              <CardFooter>
                <Button>
                  <Link
                    className="navbarlink"
                    href="https://www.instagram.com/mycomiclab/"
                    isExternal
                  >
                    Mycomiclab
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </Grid>
        </Box>
      </VStack>
    </Flex>
  );
}
