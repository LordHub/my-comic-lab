import CardPic from "./section/CardPic";
import { SimpleGrid, Heading, Box, Text } from "@chakra-ui/react";
export default function Coleccion() {
  return (
    <Box padding={"20px"}>
      <Heading align="center" color={"#362C64"} fontFamily={"Luckiest Guy"}>
        Mi colección
      </Heading>
      <SimpleGrid
        fontFamily={"Outfit"}
        spacing={4}
        gridTemplateColumns={["repeat(3, 1fr)"]}
        marginTop={"20px"}
      >
        <CardPic
          publisher="marvel"
          title="Marvel"
          imagen="Marvel.jpg"
          texto="Muy mutante y mucho mutante con alguna que otra colección aleatoria"
        />
        <CardPic
          publisher="dc"
          title="DC"
          imagen="DC.jpg"
          texto={<Text as={"i"}>I'm Batman!</Text>}
        />
        <CardPic
          publisher="other"
          title="Otros"
          imagen="Other.jpg"
          texto="Mix de colecciones, desde comics de la Golden Age hasta indies actuales"
        />
      </SimpleGrid>
    </Box>
  );
}
