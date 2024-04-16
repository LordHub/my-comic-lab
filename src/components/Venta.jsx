import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import CardVenta from "./section/CardVenta";
export default function Venta() {
  return (
    <Box backgroundColor={"#D0BEFF"}>
      <Heading
        color={"#362C64"}
        padding={5}
        fontFamily={"Luckiest Guy"}
        align={"center"}
      >
        Venta
      </Heading>

      <SimpleGrid
        justifyContent={"center"}
        gridTemplateColumns={[
          "1fr",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(5, 1fr)",
        ]}
        padding={"60px"}
        spacingX="40px"
        spacingY="20px"
      >
        <CardVenta
          imagen="src\assets\venta1.jpg"
          name="Uncanny X-Men 110 Marvel 1978 15€"
        />
        <CardVenta
          imagen="src\assets\venta2.jpg"
          name="Strange Adventures 145 DC 1962 12€"
        />
        <CardVenta
          imagen="src\assets\venta3.jpg"
          name="Micronauts 28 Marvel 1981 3€"
        />
        <CardVenta
          imagen="src\assets\venta4.jpg"
          name="Captain America 119 Marvel 1969 8€"
        />
        <CardVenta
          imagen="src\assets\venta5.jpg"
          name="Lote 10 Comics Avengers originales 20€"
        />
        <CardVenta
          imagen="src\assets\venta6.jpg"
          name="X-Men Spotlight on Starjammers 2 Marvel 1990 3€"
        />
        <CardVenta
          imagen="src\assets\venta7.jpg"
          name="Sub Mariner 70 Marvel 1974 6€"
        />
        <CardVenta
          imagen="src\assets\venta8.jpg"
          name="Legends 6 DC 1987 5€ "
        />
        <CardVenta
          imagen="src\assets\venta9.jpg"
          name="Batman 442 DC 1989 10€"
        />
        <CardVenta
          imagen="src\assets\venta10.jpg"
          name="DC Comics Presents 27 DC 1980 18€"
        />
      </SimpleGrid>
    </Box>
  );
}
