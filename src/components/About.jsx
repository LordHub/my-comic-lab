import {
  Flex,
  Image,
  Grid,
  Text,
  Heading,
  GridItem,
  Center,
  Button,
  AbsoluteCenter,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      padding={"10px"}
      backgroundColor={"#D0BEFF"}
      gap={10}
    >
      <GridItem padding={"40px"}>
        <Heading padding={"20px"} color={"#362C64"} fontFamily={"Luckiest Guy"}>
          DETRÁS DE MY COMIC LAB
        </Heading>
        <Text
          padding={"20px"}
          fontSize={"25px"}
          fontWeight={"bold"}
          fontFamily={"Outfit"}
          color={"#362C64"}
        >
          "Quería crear un espacio en español, dedicado al coleccionismo de
          cómics americanos porque no existía"
        </Text>
        <Text
          w="700px"
          padding={"20px"}
          fontFamily={"Outfit"}
          textAlign={"left"}
        >
          Podría decirse que los inicios de MyComicLab se remontan a mi niñez
          cuando ya disfrutaba leyendo cómics. Sin embargo, diría que la
          verdadera semilla que engendró todo este camino del coleccionismo, fue
          durante mi adolescencia, en un viaje a Inglaterra cuando compré los
          primeros cómics que inaugararían mi colección.
        </Text>
        <Text
          w="700px"
          padding={"20px"}
          fontFamily={"Outfit"}
          textAlign={"left"}
        >
          Como tantos otros, durante la pandemia me decidí a crear este
          proyecto, siendo así, en 2020 como nacía mi canal de YouTube.
          MyComicLab es, en definitiva, un espacio donde compartir todo lo que
          he aprendido relacionado con el coleccionismo de comics americanos y
          disfrutarlo junto a todo aquel que me quiera acompañar. Únete para
          descubrir todo sobre el coleccionismo de cómics USA DC, Marvel,
          Vertigo... ¡Y mucho más!
        </Text>
        <Flex justifyContent={"right"}>
          <Button>Únete</Button>
        </Flex>
      </GridItem>
      <GridItem padding={"40px"} align={"right"}>
        <Image
          align={"right"}
          h="480px"
          src="src\assets\aboutpic.jpg"
          alt="aboutmepic"
        />
      </GridItem>
    </Grid>
  );
}
