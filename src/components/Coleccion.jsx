import CardPic from "./section/CardPic";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
export default function Coleccion() {
  return (
    <Box padding={"20px"}>
      <Heading align="center" color={"#362C64"} fontFamily={"Luckiest Guy"}>
        Mi colección
      </Heading>
      <SimpleGrid
        fontFamily={"Outfit"}
        spacing={4}
        templateColumns="repeat(3, 1fr)"
        marginTop={"20px"}
      >
        <CardPic
          title="Marvel"
          imagen="src/assets/Marvel.jpg"
          texto="blablabla blablablabla"
        />
        <CardPic
          title="DC"
          imagen="src/assets/DC.jpg"
          texto="blablabla blablablabla2"
        />
        <CardPic
          title="Otros"
          imagen="src\assets\Other.jpg"
          texto="blablabla blablablabla3"
        />
      </SimpleGrid>
    </Box>
  );
}
