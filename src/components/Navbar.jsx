import { Flex, Spacer, Link, Box, Image, ButtonGroup } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      bg="#362c64"
      w="100%"
      p={4}
      color="white"
      height={100}
    >
      <Box boxSize="100px" p="2">
        <Image src="src\assets\mycomiclablogo.png" alt="logo" />
      </Box>
      <Spacer />
      <ButtonGroup fontFamily={"Outfit"} gap="4">
        <Link>Sobre MyComicLab</Link>
        <Link>Venta</Link>
        <Link>Colección</Link>
        <Link>Contacto</Link>
      </ButtonGroup>
    </Flex>
  );
}
