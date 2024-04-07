import {
  Flex,
  Spacer,
  Link,
  Box,
  Image,
  ButtonGroup,
  Text,
  Heading,
} from "@chakra-ui/react";
import { px } from "framer-motion";

export default function About() {
  return (
    <Flex padding={"20px"} backgroundColor={"#D0BEFF"} gap={10}>
      <Box>
        <Heading color={"#362C64"} fontFamily={"Luckiest Guy"}>
          Sobre MyComicLab
        </Heading>
        <Text marginTop={"10px"} fontFamily={"Outfit"}>
          My Comic Lab es un canal en el que encontraras todo lo relacionado con
          el coleccionismo de comics americanos. Aquí descubrirás todo lo que he
          ido aprendiendo a largo de mis años como coleccionista de comics, así
          como podrás ver lo que he ido coleccionando y responderé a vuestras
          preguntas. Únete para descubrirlo todo sobre el coleccionismo de
          comics USA DC, Marvel, Vertigo ..., disfrutar con mis comic hauls
          también soy amante de los encapsulados CGC,CBCS o PGX y de los trucos
          necesarios para conseguir comics al mejor precio en tus tiendas
          favoritas
        </Text>
      </Box>
      <Flex marginTop={"20px"} marginBottom={"20px"}>
        <Image
          w="2000px"
          h="500px"
          borderRadius={"10px"}
          marginRight={"60px"}
          src="https://yt3.ggpht.com/NEykfArplgrnndtwcPT6LBKlNtYvKT7ebDuoNOJUbUiWVCKC6GykIbChYGzEGtZOYlZHSpFZnYMB4w=s1024-rw-nd-v1"
          alt="aboutmepic"
        />
      </Flex>
    </Flex>
  );
}
