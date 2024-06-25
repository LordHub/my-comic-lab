import {
  Heading,
  Text,
  HStack,
  Flex,
  Box,
  Image,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import ConctactCard from "./section/ContactCard";

export default function Contact() {
  return (
    <Flex justifyContent={"center"} padding={10}>
      <VStack
        border={"2px"}
        borderRadius={"8px"}
        borderColor={"#362c64"}
        width={1000}
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

        <Grid
          gridTemplateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
          gap={6}
          padding={5}
        >
          <ConctactCard
            title="Email"
            text="Si no eres fan de las redes sociales, ¡te espero en mi bandeja de
          entrada!"
            logo={<MdOutlineEmail size={30} />}
            btntext="Escríbeme"
            cardlink="mailto:mycomiclab@gmail.com"
          ></ConctactCard>
          <ConctactCard
            title="YouTube"
            text="Si estás de paso por uno de mis vídeos, ¡coméntame!"
            logo={<FaYoutube size={30} />}
            btntext="Únete"
            cardlink="https://www.youtube.com/@mycomiclab1"
          ></ConctactCard>
          <ConctactCard
            title="Instagram"
            text="Si prefieres instagram, ¡mándame un mensaje!"
            logo={<FaInstagram size={30} />}
            btntext="Sígueme"
            cardlink="https://www.instagram.com/mycomiclab/"
          ></ConctactCard>
        </Grid>
      </VStack>
    </Flex>
  );
}
