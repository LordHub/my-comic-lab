import {
  Flex,
  Image,
  Grid,
  Text,
  Heading,
  GridItem,
  Button,
  Link,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "3fr 2fr"]}
      padding={"10px"}
      backgroundColor={"#D0BEFF"}
      gap={10}
      alignItems={"center"}
      justifyItems={"center"}
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
        <Text padding={"20px"} fontFamily={"Outfit"} textAlign={"left"}>
          Podría decirse que los inicios de MyComicLab se remontan a mi niñez
          cuando ya disfrutaba leyendo cómics. Sin embargo, diría que la
          verdadera semilla que engendró todo este camino del coleccionismo, fue
          durante mi adolescencia, en un viaje a Inglaterra cuando compré los
          primeros cómics que inaugararían mi colección.
        </Text>
        <Text padding={"20px"} fontFamily={"Outfit"} textAlign={"left"}>
          Como tantos otros, durante la pandemia me decidí a crear este
          proyecto, siendo así, en 2020 como nacía mi canal de YouTube.
          MyComicLab es, en definitiva, un espacio donde compartir todo lo que
          he aprendido relacionado con el coleccionismo de comics americanos y
          disfrutarlo junto a todo aquel que me quiera acompañar. Únete para
          descubrir todo sobre el coleccionismo de cómics USA DC, Marvel,
          Vertigo... ¡Y mucho más!
        </Text>
        <Flex justifyContent={"right"}>
          <Link href="https://www.youtube.com/@mycomiclab1/videos" isExternal>
            <Button>Únete</Button>
          </Link>
        </Flex>
      </GridItem>
      <Image
        fallbackSrc="fallback.jpg"
        maxWidth={[300, 500, 600]}
        w={"100%"}
        src="aboutpic.jpg"
        alt="aboutmepic"
        padding={"20px"}
      />
    </Grid>
  );
}
