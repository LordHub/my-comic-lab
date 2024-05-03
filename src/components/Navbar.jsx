import { Flex, Spacer, Box, Image, IconButton, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [display, setDisplay] = useState("none");

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      bg="#362c64"
      w="100%"
      p={4}
      height={100}
    >
      <Box boxSize="100px" p="2">
        <Link to={"/"}>
          <Image src="src\assets\mycomiclablogo.png" alt="logo" />
        </Link>
      </Box>
      <Spacer />
      {/* Desktop */}
      <Flex
        color="white"
        display={["none", "none", "flex", "flex"]}
        fontFamily={"Outfit"}
        gap="4"
        cursor="pointer"
      >
        <Box className="navbarlink">Sobre MyComicLab</Box>
        <Box className="navbarlink">Venta</Box>
        <Box className="navbarlink">Colección</Box>
        <Box className="navbarlink">Contacto</Box>
      </Flex>

      {/* Mobile button */}
      <Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => setDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Box className="navbarlink">Sobre MyComicLab</Box>
          <Box className="navbarlink">Venta</Box>
          <Box className="navbarlink">Colección</Box>
          <Box className="navbarlink">Contacto</Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
