import CardPic from "./section/CardPic";
import { SimpleGrid, Heading, Box } from "@chakra-ui/react";
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
          imagen="src/assets/Marvel.jpg"
          texto="blablabla blablablabla"
        />
        <CardPic
          publisher="dc"
          title="DC"
          imagen="src/assets/DC.jpg"
          texto="blablabla blablablabla2"
        />
        <CardPic
          publisher="other"
          title="Otros"
          imagen="src\assets\Other.jpg"
          texto="blablabla blablablabla3"
        />
      </SimpleGrid>
    </Box>
  );
}
